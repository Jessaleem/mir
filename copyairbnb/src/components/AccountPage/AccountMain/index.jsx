import './styles.scss';

const AccountMain = () => (
  <>
  <div className="account__container">
    <div className="account-top-container--bigsc">
      <h1 className="account-acctext--bigsc"> Account </h1>
      <div className="account-top-text--bigsc"></div>
      <span className="account-top-name--bigsc">Jessica Martinez,</span>
      <span className="account-top-email--bigsc"> aleejess@gmail.com. </span>
      <a href="https://www.airbnb.com/users/show/48369716" className="account__showprofile"> Go to profile </a>
    </div>
    <div className="account__top-container">
      <div className="account__profilePic-container">
        <img src="img/Account-Images/Profilepic.png" className="account__profilePic" alt="profilepic" />
      </div>
      <div className="account__name-container">
        <h1 className="account__name"> Jessica </h1>
      </div>
      <div className="account__showprofilecontainer">
        <a href="https://www.airbnb.com/users/show/48369716" className="account__showprofile"> Show Profile </a>
      </div>
    </div>
    <div className="account__main-container">
      <div className="account__mainDivision-container">
        <div className="account__mainLogo-container">
          <img src="img/Account-Images/Userlogo.png" className="account__mainLogo" alt="userlogo" />
        </div>
        <div className="account__mainText-container">
          <div className="account__mainText">
            Personal info
          </div>
          <span className="account__nextbar"><b>˃</b></span>
        </div>
        <div className="account__mainText2">
            Provide personal details and how we can reach you
        </div>
      </div>
        <div className="account__mainDivision-container">
          <div className="account__mainLogo-container">
            <img src="img/Account-Images/Credit-card.png" className="account__mainLogo" alt="userlogo" />
          </div>
          <div className="account__mainText-container">
            <div className="account__mainText">
              Payments and payouts
            </div>
            <span className="account__nextbar"><b>˃</b></span>
          </div>
          <div className="account__mainText2">
            Review payments, payouts, coupons, gift cards, and taxes
          </div>
        </div>
        <div className="account__mainDivision-container">
          <div className="account__mainLogo-container">
            <img src="img/Account-Images/Privacy.png" className="account__mainLogo" alt="userlogo" />
          </div>
          <div className="account__mainText-container">
            <div className="account__mainText">
              Login and Security
            </div>
            <span className="account__nextbar"><b>˃</b></span>
          </div>
          <div className="account__mainText2">
            Update your password and secure your account
          </div>
        </div>
        <div className="account__mainDouble-container">
          <h1 className="account__mainSupport">
            Support
          </h1>
          <div className="account__mainDivision-container">
            <div className="account__mainLogo-container">
              <img src="img/Account-Images/Help.png" className="account__mainLogo" alt="userlogo" />
            </div>
            <div className="account__mainText-container">
              <div className="account__mainText">
                Get help
              </div>
              <span className="account__nextbar"><b>˃</b></span>
            </div>
            <div className="account__mainText2">
              Cancel a reservation, change a reservation, contact us
            </div>
          </div>
        </div>
        <button className="account__logout" type="button">Log out</button>
    </div>
  </div>
  </>
)

export default AccountMain;
