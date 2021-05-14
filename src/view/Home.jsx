import React from "react";
import Banner from "../components/Banner";
import Tablet from "../components/Tablet";
import Presale from "../components/Presale";
import TabletSuperpowers from "../components/TabletSuperpowers";
import Storage from "../components/Storage";
import Performances from "../components/Performances";
import Description from "../components/Description";
import PresaleBottom from "../components/PresaleBottom";

const Home = () => {
  return (
    <div className="content">
      <section className="banner col-12">
        <Banner />
      </section>
      <section className="tablet">
        <Tablet />
      </section>
      <section className="presale light-grey">
        <Presale />
      </section>
      <section className="tablet-superpowers">
        <TabletSuperpowers />
      </section>
      <section className="storage light-grey">
        <Storage />
      </section>
      <section className="performance">
        <Performances />
      </section>
      <section className="description">
        <Description />
      </section>
      <section className="presale-bottom">
        <PresaleBottom />
      </section>
    </div>
  );
};

export default Home;
