import React from "react";
import { Link } from "react-router-dom";
import avatarSvg from "assets/images/avatar.png";

const CardProfile = () => {
  return (
    <section className="CardProfile">
      <div className="CardProfile__content">
        <img src={avatarSvg} className="avatar" alt="avatar" />
        <Link className="link" to="./">
          Loan officer
        </Link>
        <span className="text">your main contact</span>
        <p className="text text-bold">Andrew Schuclell</p>
        <div className="CardProfile__content--bottom">
          <Link to="./" className="text text-small">
            andrew@constlending.com
          </Link>
          <span className="text text-small">213-232-3248</span>
        </div>
      </div>
    </section>
  );
};
export default CardProfile;
