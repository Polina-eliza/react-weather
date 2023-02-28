function Header() {
    return (
      <div className="header__container">
        <div className="main__subheading">Week</div>
        <div className="button__wrapper">
          <button className="btn__degrees active" id="celsius-button">
            <a className="cel" href="/" id="celsius-link">
              °C
            </a>
          </button>
          <button className="btn__degrees" id="fahrenheit-button">
            <a className="fah" href="/" id="fahrenheit-link">
              °F
            </a>
          </button>
        </div>
      </div>
    );
  }