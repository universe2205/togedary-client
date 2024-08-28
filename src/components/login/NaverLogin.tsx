import { Link } from 'react-router-dom';
const naverLogin = require('../../assets/btnW_아이콘원형.png');

export default function NaverLogin() {
  const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
  const state = 'randomstate';
  const redirectURI = process.env.REACT_APP_NAVER_REDIRECT_URI as string;
  const encodeRedirectUri = encodeURI(redirectURI);
  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeRedirectUri}&state=${state}`;

  return (
    <Link to={url} className='sns-login' id='naver-login'>
      <img src={naverLogin} alt='네이버 로그인 아이콘' />
      <p>네이버 로그인</p>
    </Link>
  );
}
