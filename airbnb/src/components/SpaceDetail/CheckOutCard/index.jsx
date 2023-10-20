/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import loadCheckoutForm from '../../../store/action/checkout';

const CheckOutCard = ({
  price,
  dates,
  image,
  title,
}) => {
  const token = localStorage.getItem('token');
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState({
    arrive: null,
    departure: null,
    adults: 0,
    children: 0,
    pets: 0,
    price,
    image,
    _id,
    title,
  });

  const handleDecrement = (e) => {
    setCheckout({
      ...checkout,
      [e.target.name]: checkout[e.target.name] - 1,
    });
  };

  const handleIncrement = (e) => {
    setCheckout({
      ...checkout,
      [e.target.name]: checkout[e.target.name] + 1,
    });
  };

  const handleChange = (e) => {
    setCheckout({
      ...checkout,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loadCheckoutForm(checkout));
    if (token) {
      navigate('/payments');
    } else {
      navigate('/login-form');
    }
  };

  return (
    <>
      <section className="spaceDetail__sub-menu-container">
        <div className="spaceDetail__sub-menu__text-container">
          <p className="spaceDetail__sub-menu__price"><span className="span">$</span>{price}<span> usd / night</span></p>
          <p className="spaceDetail__sub-menu__dates">{dates} </p>
        </div>
        <div className="spaceDetail__sub-menu__button-container">
          <Link to="/payment">
            <button type="button" className="spaceDetail__sub-menu-button">
              Reserve
            </button>
          </Link>
        </div>
      </section>

      <section className="spaceDetail__checkout-card-container">
        <form onSubmit={handleSubmit}>
          <div className="spaceDetail__checkout-card__price">
            <span className="span">$</span>{price} <span> night</span>
          </div>
          <div className="spaceDetail__checkout-card__options-container">
            <div className="spaceDetail__checkout-card__options__check-in">
              <label htmlFor="date">
                check-in
                <input type="date" onChange={handleChange} name="arrive" />
              </label>
            </div>
            <div className="spaceDetail__checkout-card__options__check-out">
              <label htmlFor="date">
                check-out
                <input type="date" onChange={handleChange} name="departure" />
              </label>
            </div>

            <nav className="spaceDetail__checkout-card__options__guests">
              <label htmlFor="touch"><span>Guest</span></label>
              <input type="checkbox" id="touch" />

              <ul className="spaceDetail__dropDown">
                <li>
                  <div className="dropDown__option-conatainer">
                    <p>Adults</p>
                    <div className="dropDown__option-buttons">
                      <button name="adults" type="button" onClick={handleDecrement}>-</button>
                      <input name="adults" value={checkout.adults} onChange={handleChange} />
                      <button name="adults" type="button" onClick={handleIncrement}>+</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="dropDown__option-conatainer">
                    <p>Children</p>
                    <div className="dropDown__option-buttons">
                      <button name="children" type="button" onClick={handleDecrement}>-</button>
                      <input name="children" value={checkout.children} onChange={handleChange} />
                      <button name="children" type="button" onClick={handleIncrement}>+</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="dropDown__option-conatainer">
                    <p>Pets</p>
                    <div className="dropDown__option-buttons">
                      <button name="pets" type="button" onClick={handleDecrement}>-</button>
                      <input name="pets" value={checkout.pets} onChange={handleChange} />
                      <button name="pets" type="button" onClick={handleIncrement}>+</button>
                    </div>
                  </div>
                </li>

              </ul>
            </nav>

          </div>
          <div className="spaceDetail__checkout-card__button-container">
            <button type="submit" className="spaceDetail__checkout-card__button">
              Reserve
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

CheckOutCard.defaultProps = {
  price: null,
  dates: null,
  image: null,
  title: null,
};

CheckOutCard.propTypes = {
  price: PropTypes.number,
  dates: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};
export default CheckOutCard;
