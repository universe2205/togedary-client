import { NavLink } from 'react-router-dom';

type header = {
  username?: string;
};

export default function Header({ username }: header) {
  return (
    <header>
      <div className='header-container'>
        <NavLink className='logo' to='/'>
          투게더리
        </NavLink>
        <ul className='menu'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'activated' : '')}>
              소개
            </NavLink>
          </li>
          {username && (
            <li>
              <NavLink to='/togedary' className={({ isActive }) => (isActive ? 'activated' : '')}>
                투게더리
              </NavLink>
            </li>
          )}
          {username && (
            <li>
              <NavLink to='/diary' className={({ isActive }) => (isActive ? 'activated' : '')}>
                내 다이어리
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
