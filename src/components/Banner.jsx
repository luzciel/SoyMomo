import React, { Fragment } from "react";
import bannerTP2Desktop from "../assets/VIDEOS/banner_TP2_desktop_LOW.mp4";
import bannerTP2Mobile from "../assets/VIDEOS/banner_TP2_mobile_LOW.mp4";
const Banner = () => {
  return (
    <Fragment>
      <video className="banner-video--desktop" width="400px" muted autoPlay loop>
          <source src={bannerTP2Desktop} type="video/mp4" />
      </video>
      <video className="banner-video--mobile" muted autoPlay loop>
          <source src={bannerTP2Mobile} type="video/mp4" />
      </video>
    </Fragment>
  );
};

export default Banner;