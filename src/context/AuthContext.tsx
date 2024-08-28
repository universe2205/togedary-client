import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import AuthService from '../service/auth';
import React from 'react';
import Header from '../components/Header';
import Introduce from '../components/Introduce';
import BaseBackground from '../components/BaseBackground';

type authProvider = {
  authService: AuthService;
  authErrorEventBus: AuthErrorEventBus;
  children?: React.ReactNode;
};

type User = {
  id: number;
  email: string;
  name: string;
  phone_number: string;
};

type AuthContextType = {
  user: User | undefined;
  kakaoLogin: (code: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ authService, authErrorEventBus, children }: authProvider) {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    authErrorEventBus.listen((err: any) => {
      console.log(err);
      setUser(undefined);
    });
  }, [authErrorEventBus]);

  const kakaoLogin = useCallback(
    async (code: string) =>
      authService.kakaoLogin(code).then((data) => {
        const id: number = data.id;
        const email: string = data.kakao_account.email;
        const name: string = data.kakao_account.name;
        const phone_number: string = data.kakao_account.phone_number;
        const user: User = { id, email, name, phone_number };
        setUser(user);
      }),
    [authService]
  );

  const context = useMemo(
    () => ({
      user,
      kakaoLogin,
    }),
    [user, kakaoLogin]
  );

  return (
    <AuthContext.Provider value={context}>
      {user ? (
        children
      ) : (
        <div className='app'>
          <Header />
          <BaseBackground children={<Introduce onKakao={kakaoLogin} />} />
        </div>
      )}
    </AuthContext.Provider>
  );
}

export class AuthErrorEventBus {
  callback: CallableFunction = () => {};
  listen(callback: CallableFunction) {
    this.callback = callback;
  }
  notify(error: any) {
    this.callback(error);
  }
}

export default AuthContext;
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
