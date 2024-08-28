import { Link } from 'react-router-dom';
import googleLogin from '../../assets/web_light_rd_na@2x.png';

export default function GoogleLogin() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`;

  return (
    <Link className='sns-login' id='google-login' to={url}>
      <img src={googleLogin} alt='구글로그인 이미지' />
      <p>구글 로그인</p>
    </Link>
  );
}
