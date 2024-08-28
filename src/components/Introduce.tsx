import KakaoLogin from './login/KakaoLogin';
import GoogleLogin from './login/GoogleLogin';
import NaverLogin from './login/NaverLogin';
import diary from '../assets/diary.png';

export type introduce = {
  onKakao?: (code: string) => Promise<void>;
  username?: string;
};

export default function Introduce({ onKakao, username }: introduce) {
  return (
    <>
      <p className='title'>보고싶은 친구를 위한 투게더리</p>
      <p className='text'>
        멀리 있는 친구들이 그리운 분들,
        <br /> 소소한 일상을 친구와 공유하며 기록하고 싶은 분들을 위해 기획한 투게더리 입니다.
        <br />
      </p>
      <p className='text'>
        혼자만의 다이어리를 쓸 수도 있고 친구들을 초대해 같이 쓸 수도 있습니다.
        <br />
        사진을 올리고, 스티커를 붙이고, 친구들과 다이어리를 꾸며보세요.
        <br />
      </p>
      {!username ? (
        <div className='login-box'>
          <KakaoLogin onKakao={onKakao} />
          <GoogleLogin />
          <NaverLogin />
        </div>
      ) : (
        <div className='img-box'>
          <img src={diary} alt='다이어리 이미지' />
        </div>
      )}
    </>
  );
}
