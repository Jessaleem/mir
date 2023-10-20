import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import AmenitiesData from './AmenitiesData';

const Amenities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spaceRegister = useSelector((state) => state?.space?.spaceRegister);

  const handleNext = () => {
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister /* , amenitie */ } });
    navigate('/images');
  };

  return (
    <div>
      <div className="form__header4">
        <div className="header__logo">
          <Link to="/">
            <img
              className="logo__img"
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662837/images/LogoIcon/White_r831ni.png"
              alt="airbnbLogo"
            />
          </Link>
        </div>
        <div className="header__help-container4">
          <button className="header__help" type="button">
            Help
          </button>
          <Link to="/">
            <button className="header__save" type="button">
              Exit
            </button>
          </Link>
        </div>
      </div>
      <div className="container__question4">
        <h1 className="question__title">
          Let guest know what your place has to offer
        </h1>
      </div>
      <div className="container__options-fixed4">
        <AmenitiesData />
      </div>
      <div className="container__button-step">
        <div className="progress4" />
        <Link to="/floor-plan">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <button onClick={handleNext} className="button__nextstep" type="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Amenities;
