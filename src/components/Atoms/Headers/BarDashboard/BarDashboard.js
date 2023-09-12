import React from "react";
import bellSvg from "../../../../assets/images/bell.svg";
import briefcaseSvg from "../../../../assets/images/briefcase.svg";
import awardSvg from "../../../../assets/images/award.svg";
import logoutSvg from "../../../../assets/images/logout.svg";
import avatarSvg from "../../../../assets/images/avatar.png";
import { Link } from "react-router-dom";

const BarDashboard = () => {
  return (
    <div className="BarDashboard">
      <div className="box">
        <div className="notification">
          <div className="number-ammoint">
            <span>9</span>
          </div>
          <img className="icon bell" src={bellSvg} alt="bell" />
        </div>
      </div>
      <div className="box box-medium">
        <div className="item">
          <Link className="link" to="./">
            <img src={briefcaseSvg} className="icon" alt="briefcase" />
            <span>Loans</span>
          </Link>
          <Link className="link" to="./">
            <img src={awardSvg} className="icon" alt="award" />
            <span>Entities</span>
          </Link>
        </div>
      </div>
      <div className="box box-end">
        <Link className="link" to="./">
          <img src={logoutSvg} className="icon" alt="logout" />
          <span>Log out</span>
        </Link>
        <Link className="link" to="./">
          <img src={avatarSvg} className="avatar" alt="avatarSvg" />
        </Link>
      </div>
    </div>
  );
};
export default BarDashboard;
