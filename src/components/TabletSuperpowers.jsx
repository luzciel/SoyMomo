import React, { Fragment } from "react";
import tabletBlueDesktop from "../assets/IMG DESKTOP/landing_pro2_desktop_inteligencia_artificial.jpg";
import tabletBlueMobile from "../assets/IMG MOBILE/landing_pro2_mobile_inteligencia_artificial.jpg";
import iconCyberBullying from "../assets/ICONOS/icon_cyberbullying_landing.svg";

const TabletSuperpowers = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 tablet-superpowers-text ">
            <h2>
              ¡TABLE PARA NIÑO CON <strong>SUPERPODERES</strong>!
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-1">
          <div className="col-12 col-lg-4 tablet-superpowers-icon">
            <img
              className="icon-bullying"
              src={iconCyberBullying}
              alt="Icon-Cyber-Bullying"
            />
            <p>
              Software de <br /> inteligencia artificial
            </p>
          </div>
          <div className="col-12 col-lg-8 tablet-superpowers-img ">
            <img
              className="img-tablet-blue--desktop"
              src={tabletBlueDesktop}
              alt=""
            />
            <img
              className="img-tablet-blue--mobile"
              src={tabletBlueMobile}
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TabletSuperpowers;
