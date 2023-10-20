import PropTypes from 'prop-types';

const Description = ({ details }) => (
  <div className="spaceDetail__bg-screen-container">
    <section className="description__type__main__container">
      <div className="description__host__type-container">
        <div className="description__host__type__icon-container">
          <img className="description__host__type__icon" src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660015567/images/Amenities/PropertyTypeGroup/House_xrdon4.png" alt="Ranch" />
        </div>
        <p className="description__host__type__text">{details?.type}</p>
      </div>

      <div className="description__host__privacity-type-container">
        <div className="description__host__privacity-type__icon-container">
          <img className="description__host__privacity-type__icon" src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660015542/images/Amenities/PropertyTypeGroup/Ranch_cqiayn.png" alt="Ranch" />
        </div>
        <p className="description__host__privacity-type__text">{details?.privacyType}</p>
      </div>
    </section>

    <hr className="spaceDetail__line-separation" />

    <section className="description__host__info-container">
      <div className="description__host__info__text-container">
        <h3 className="host__info__text__name">Place Hosted by {details?.host?.name}</h3>
        <p className="host__info__text__amenities">{details?.floorPlan?.guest} guests · {details?.floorPlan.bedrooms} bedrooms · {details?.floorPlan?.beds} beds ·{details?.floorPlan?.bathrooms} bathroom</p>
      </div>
      <div className="description__host__info__imgae-container">
        <img className="description__host__info__image" src={details?.host?.avatar} alt="hosts-profile" />
      </div>
    </section>

    <hr className="spaceDetail__line-separation" />

    <section className="description__space__description-container">
      <p className="description__space__description-text"> {details?.description}
      </p>
    </section>

    <hr className="spaceDetail__line-separation" />
    <section className="spaceDetail__amenities-container">
      <div className="spaceDetail__amenities__kitchen-container">
        <h3 className="spaceDetail__amenities__kitchen">Kitchen</h3>
        <div className="spaceDetail__amenities__kitchen__icon-container">
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
    <hr className="spaceDetail__line-separation" />
  </div>
);
Description.propTypes = {
  details: PropTypes.shape().isRequired,
};

export default Description;
