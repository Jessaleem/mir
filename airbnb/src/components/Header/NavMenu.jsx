import { Link, useLocation } from 'react-router-dom';

import Menu from '../Menu';
import Searcher from '../Searcher';

import './NavMenuStyles.scss';

const NavMenu = () => {
  const { pathname } = useLocation();

  return (
    <header className={`${pathname.slice(1)} navMenu navMenu--bgscreen`}>
      <div className="container-logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662807/images/Logo/Pink_lmr4oj.png" alt="airbnb-logo" className="container-logo__logo" />
        </Link>
      </div>
      <Searcher />
      <Menu />
    </header>
  );
};

export default NavMenu;
