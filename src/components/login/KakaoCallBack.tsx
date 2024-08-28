import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { introduce } from '../Introduce';

export default function KakaoCallBack({ onKakao }: introduce) {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      console.error('Authorization code is missing');
      return undefined;
    }
    if (onKakao) {
      onKakao(code);
      navigate('/');
    }
  });

  return <></>;
}
