import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { createSpace } from '../../../services/spaces';
import './styles.scss';

const Preview = () => {
  const navigate = useNavigate();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);

  const {
    price,
    description,
    title,
    img,
  } = spaceRegister;

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSpace = await createSpace(spaceRegister);
      if (newSpace) {
        navigate('/');
      }
    } catch (error) {
      swal({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        button: 'Close',
      });
    }
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
          Check out your listing!
        </h1>
      </div>
      <div className="container__options-fixed4">
        <div className="container__options-scroll5">
          <div className="container__preview">
            <div className="card__image-container">
              <img className="card__image__image" src={img[0]} alt={title} />
            </div>
            <div className="info-container">
              <div className="card__title"><b>{title}</b></div>
              <p className="card__description">{description}</p>
              <div className="card__price"> ${price} <span>night</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress9" />
        <Link to="/price">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <button onClick={handlerSubmit} className="button__savelisting" type="submit">
          Save your listing
        </button>
      </div>
    </div>
  );
};

export default Preview;
