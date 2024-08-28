import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function GoogleCallBack() {
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
  const clientPw = process.env.REACT_APP_GOOGLE_CLIENT_PASSWORD;

  const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get('code');
    if (!token) {
      console.error('Authorization code is missing');
      return undefined;
    }
    try {
      const res = await axios.post(
        `https://oauth2.googleapis.com/token?grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientPw}&code=${token}`,
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );
      return res;
    } catch (error) {
      console.error('Error fetching the token:', error);
      return undefined;
    }
  };

  useEffect(() => {
    getToken()
      .then((res) => {
        if (res) {
          const { data } = res;
          const { access_token } = data;

          if (access_token) {
            axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`) //
              .then((res) => {
                console.log(res);
              });
            navigate('/');
          }
        }
      })
      .catch((err) => console.log(err));
  });

  return <></>;
}
