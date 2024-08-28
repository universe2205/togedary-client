import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BaseBackground from './components/BaseBackground';
import Introduce from './components/Introduce';
import Togedary from './components/Togedary';
import Diary from './components/Diary';
import KakaoCallBack from './components/login/KakaoCallBack';
import GoogleCallBack from './components/login/GoogleCallBack';
import NaverCallBack from './components/login/NaverCallBack';
import { useAuth } from './context/AuthContext';

function App() {
  const user = useAuth();
  const username = user.user?.name;
  console.log(user.user);

  return (
    <div className='App'>
      <Header username={username} />
      <Routes>
        <Route path='/' element={<BaseBackground children={<Introduce username={username} />} />} />
        <Route path='/oauth/kakao/callback' element={<KakaoCallBack />} />
        <Route path='/oauth/google/callback' element={<GoogleCallBack />} />
        <Route path='/oauth/naver/callback' element={<NaverCallBack />} />
        <Route path='/togedary' element={<BaseBackground children={<Togedary />} />} />
        <Route path='/diary' element={<BaseBackground children={<Diary />} />} />
      </Routes>
    </div>
  );
}

export default App;
