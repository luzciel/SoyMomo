import React, { Fragment } from "react";
import tabletPro2 from "../assets/VIDEOS/Tablet Pro 2_0-giro 360_web_LOW.mp4";

const Presale = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row mb-1">
          <div className="presale-video col-12 col-lg-6">
            <video width="400px" muted autoPlay loop>
              <source src={tabletPro2} type="video/mp4" />
            </video>
          </div>
          <div className="col-12 col-lg-6">
            <div className="presale-text">
              <p className="text-price"> PRECIO PREVENTA </p>
              <p className="number-price"> $159.990 </p>
              <p>
                Precio lanzamiento <span>199.990</span> <br /> *Despacho a partir de 8
                de Junio{" "}
              </p>
              <button className="btn">RESERVAR AHORA</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Presale;
