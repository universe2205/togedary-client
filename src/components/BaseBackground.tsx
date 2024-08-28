import { PropsWithChildren } from 'react';

export default function BaseBackground({ children }: PropsWithChildren) {
  return (
    <div className='document'>
      <div className='content'>{children}</div>
    </div>
  );
}
