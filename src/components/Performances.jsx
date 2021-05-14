import React, { Fragment } from "react";
import iconRendimiento from "../assets/ICONOS/icon_rendimiento_landing.svg";
import maximoRendimientoDesktop from "../assets/IMG DESKTOP/landing_pro2_desktop_maximo_rendimiento.jpg";
import maximoRendimientoMobile from "../assets/IMG MOBILE/landing_pro2_mobile_maximo_rendimiento.jpg";

const Performances = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 performance-text">
            <p>
              Maximo rendimiento, ¡diversión a la velocidad de la luz y en alta
              calidad!
            </p>
            <img src={iconRendimiento} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 performance-img">
            <img
              src={maximoRendimientoDesktop}
              className="performance-img--desktop"
              alt="tablet-performance"
            />
            <img
              src={maximoRendimientoMobile}
              className="performance-img--mobile"
              alt="tablet-performance"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Performances;
