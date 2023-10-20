import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const result = localStorage.getItem('profile');
  const profile = JSON.parse(result);

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div className="menu--queri-bgscreen">
      <ul className="nav-menu">
        <li>
          <div className="menu__icon-container">
            <div className="menu__icon" />
            <div className="menu__icon" />
            <div className="menu__icon" />
          </div>
          {
            profile
              ? (
                <ul className="menu__item">
                  <li><Link to="/account" className="menu__item__link" aria-disabled>Hello, {profile.name}</Link></li>
                  <li><Link to="/" className="menu__item__link" onClick={handleClick}>Log out</Link></li>
                  <li><Link to="/guest-booking" className="menu__item__link">Your reservations</Link></li>
                </ul>
              )
              : (
                <ul className="menu__item">
                  <li><Link to="/signup-form" className="menu__item__link">Sing up</Link></li>
                  <li><Link to="/login-form" className="menu__item__link">Log in</Link></li>
                </ul>
              )
          }
        </li>
      </ul>
    </div>
  );
};

export default Menu;
