import React from "react";
// import { Link } from "react-router-dom";
import bannerTP2Desktop from "../assets/VIDEOS/banner_TP2_desktop_LOW.mp4";
import tabletPro2 from "../assets/VIDEOS/Tablet Pro 2_0-giro 360_web_LOW.mp4";
import tabletBlueDesktop from "../assets/IMG DESKTOP/landing_pro2_desktop_inteligencia_artificial.jpg";
import IconCyberBullying from "../assets/ICONOS/icon_cyberbullying_landing.svg";
import IconRendimiento from "../assets/ICONOS/icon_rendimiento_landing.svg";
import desktopMaximoRendimiento from "../assets/IMG DESKTOP/landing_pro2_desktop_maximo_rendimiento.jpg";
const Home = () => {
  return (
    <div className="content">
      <section className="banner col-12">
        <video width="400px" muted autoPlay loop>
          <source src={bannerTP2Desktop} type="video/mp4" />
        </video>
      </section>
      <section className="tablet">
        <div className="container">
          <div className="row">
            <div className="table-text col-12 py-xs-1 py-md-2">
              <h2 className="text-purple">
                La table más avanzada del mundo para niños.
              </h2>
              <h2>
                Con Funda resistente y sistema inteligente <br />
                Antibulling{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 video-youtube">
              <iframe
                className="video-embed"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DNjzpHweOTk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="presale">
        <div className="container">
          <div className="row mb-1">
            <div className="presale-video col-12 col-lg-6 px-md-2 py-xs-1">
              <video width="400px" muted autoPlay loop>
                <source src={tabletPro2} type="video/mp4" />
              </video>
            </div>
            <div className="col-12 col-lg-6 px-md-2 py-xs-1">
              <div className="presale-text">
              <p className="text-price"> PRECIO PREVENTA </p>
              <p className="number-price"> $159.990 </p>
              <p>Precio lanzamiento $199.990 <br /> *Despacho a partir de 8 de Junio </p>
              <button className="btn">RESERVAR AHORA</button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>
          ¡TABLE PARA NIÑO CON <strong>SUPERPODERES</strong>!
        </h2>
        <figure>
          <img src={tabletBlueDesktop} alt="" />
        </figure>
        <div>
          <figure>
            <img src={IconCyberBullying} alt="" />
          </figure>
          <p>Software de inteligencia artificial</p>
        </div>
      </section>
      <section>
        <h3> MAS ALMACENAMIENTO, MÁS DIVERSIÓN </h3>
        <p>64 GB en almacenamiento</p>
        <button>RESERVA AHORA</button>
      </section>
      <section>
        <div>
          <p>
            Maximo rendimiento, ¡diversión a la velocidad de la luz y en alta
            calidad!
          </p>
          <figure>
            <img src={IconRendimiento} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={desktopMaximoRendimiento} alt="" />
          </figure>
        </div>
        <div>
          <p>Caracteristicas</p>
        </div>
        <div>
          <h3>¡SE EL PRIMERO EN TENERLA! Y DISFRUTA SU PREVENTA</h3>
          <button>RESERVA AHORA</button>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default Home;
