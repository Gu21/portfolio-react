import React from "react";
import Header from "../../components/Header";
import SocialNetwork from "../../components/SocialNetwork";
import Showcase from "../../components/Showcase";

const Home = () => {
  return (
    <section className="bg-1">
      <div>
        <Showcase />
        <Header />
        <SocialNetwork />
      </div>
    </section>
  );
};

export default Home;
