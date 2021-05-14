import React, { Fragment } from "react";

const Tablet = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="table-text col-12">
            <h2 className="text-purple">
              La Table más avanzada del mundo para niños.
            </h2>
            <h2>
              Con Funda extra resistente y sistema inteligente <br />
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
              src="https://www.youtube.com/embed/DNjzpHweOTk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Tablet;
