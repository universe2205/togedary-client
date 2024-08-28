import kakaoLogin from '../../assets/kakao_login_large_wide.png';
import { Link } from 'react-router-dom';
import { introduce } from '../Introduce';
import KakaoCallBack from './KakaoCallBack';

export default function KakaoLogin({ onKakao }: introduce) {
  const restApiKey = process.env.REACT_APP_KAKAO_RESTAPI;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const kakaoUri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${restApiKey}&redirect_uri=${redirectUri}&scope=profile_nickname,account_email,name,phone_number`;

  return (
    <>
      <Link className='sns-login' to={kakaoUri}>
        <img src={kakaoLogin} alt='카카오로그인 이미지' />
      </Link>
      <KakaoCallBack onKakao={onKakao} />
    </>
  );
}
