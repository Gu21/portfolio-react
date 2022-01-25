import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import SocialNetwork from "../../components/SocialNetwork/SocialNetwork";
import Showcase from "../../components/Showcase/Showcase";

const Home = () => {
  return (
    <section>
      <div>
        <Navigation />
        <Showcase />
        <SocialNetwork />
      </div>
    </section>
  );
};

export default Home;
