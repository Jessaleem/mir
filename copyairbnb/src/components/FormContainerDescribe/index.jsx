import { Link } from 'react-router-dom';
import './styles.scss';

const FormContainerDescribe = () => (
  <div>
    <div className="form__header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="logo__img"
            src="img/LogoIcon/White.png"
            alt="airbnbLogo"
          />
        </Link>
      </div>

      <div className="header__buttons">
        <button className="button" type="button">Ask a Superhost</button>
        <button className="button" type="button">Help</button>
      </div>
    </div>

    <div className="form__container">
      <div className="container__question">
        <h1 className="question__title">
          Wich of these best describes your place?
        </h1>
      </div>

      <div className="container__options">
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Home</h2>
          <p className="option__card-description1">
            A home that may stand-alone or have shared walls.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Cabin</h2>
          <p className="option__card-description1">
            A house made with natural materials like wood and built in a
            natural setting.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Villa</h2>
          <p className="option__card-description1">
            A luxury home that may have indoor-oudoor spaces, gardens, and
            pools.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Townhouse</h2>
          <p className="option__card-description1">
            A multi-level row or terrace house that shares walls and possibly
            outdoor spaces.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Cottage</h2>
          <p className="option__card-description1">
            A cozy house built in a rural area or near a lake or beach.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Bungalow</h2>
          <p className="option__card-description1">
            A single-level house with a wide front porch an a sloping roof.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Earthen home</h2>
          <p className="option__card-description1">
            A home built in the ground or made from material like rammed
            earth.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">House boat</h2>
          <p className="option__card-description1">
            A floating home constructed from similar materials as a land-based
            home.
          </p>
        </button>
        <button className="option__card1" type="button">
          <h2 className="option__card-title1">Hut</h2>
          <p className="option__card-description1">
            A home made of wood or mud that may have a tatched straw roof.
          </p>
        </button>

        <div className="container__button-step">
          <Link to="/FormContainerType">
            <button className="button__backstep" type="button">Back</button>
          </Link>
          <Link to="/FormContainerCapacity">
            <button className="button__nextstep" type="button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FormContainerDescribe;
