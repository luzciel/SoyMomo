import React, { Fragment } from "react";
import android from "../assets/ICONOS/caracteristica_android_pro2.svg";
import battery from "../assets/ICONOS/caracteristica_bateria_pro2.svg";
import cpu from "../assets/ICONOS/caracteristica_cpu_pro2.svg";
import memory from "../assets/ICONOS/caracteristica_memoria_pro2.svg";
import inches from "../assets/ICONOS/caracteristica_pulgadas_pro2.svg";
import ram from "../assets/ICONOS/caracteristica_ram_pro2.svg";

const Description = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 description-text ">
            <p className="description-title">Características</p>
          </div>
          <div className="row description-table">
            <div className="col-12 col-lg-5 item wrapper-gray--mobile">
              <img src={android} alt="" />
              <p>ANDROID 10</p>
            </div>
            <div className="col-12 col-lg-5 item">
              <img src={ram} alt="" />
              <p>4G RAM</p>
            </div>
            <div className="col-12 col-lg-5 item wrapper-gray--mobile">
              <img src={memory} alt="" />
              <p>64 GB</p>
            </div>
            <div className="col-12 col-lg-5 item">
              <img src={inches} alt="" />
              <p>8 PULGADAS</p>
            </div>
            <div className="col-12 col-lg-5 item wrapper-gray--mobile">
              <img src={cpu} alt="" />
              <p>PROCESADOR T618 OCTACORE 2.0 GHz</p>
            </div>
            <div className="col-12 col-lg-5 item">
              <img src={battery} alt="" />
              <p>BATERIA DE 5000 MAH</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Description;
