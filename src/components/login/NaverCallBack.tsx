import axios from 'axios';
import { useEffect } from 'react';

export default function NaverLogin() {
  const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
  const clientPw = process.env.REACT_APP_NAVER_CLIENT_PASSWORD;
  const redirectURI = encodeURI('http://localhost:3000/naver/oauth2');

  const getToken = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (!code) {
      console.error('Authorization code is missing');
      return undefined;
    }
    const state = new URL(window.location.href).searchParams.get('state');
    const url = `/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientPw}&redirect_uri=${redirectURI}&code=${code}&state=${state}`;

    try {
      const res = await axios.get(url, {
        headers: {
          'X-Naver-Client-Id': clientId,
          'X-Naver-Client-Secret': clientPw,
        },
      });
      return res;
    } catch (error) {
      console.error('Error fetching the token:', error);
      return undefined;
    }
  };

  useEffect(() => {
    getToken().then((res) => {
      if (res) {
        // const { data } = res;
        // const { access_token } = data;
        // TODO 서버에서 마저 구현
      }
    });
  });
  return <></>;
}
