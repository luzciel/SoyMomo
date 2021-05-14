import React, { Fragment } from "react";
import iconoMas from "../assets/ICONOS/reserva_mas.svg";

const Storage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 storage-text">
            <h3 className="storage-text-title">
              {" "}
              MÁS ALMACENAMIENTO, MÁS DIVERSIÓN{" "}
            </h3>
            <p>64 GB en almacenamiento</p>
            <a href="/home">
              <p className="">RESERVA AHORA</p>
              <img src={iconoMas} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Storage;
