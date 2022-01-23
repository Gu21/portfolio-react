import React from "react";
import Navigation from "../../components/Navigation";
import SocialNetwork from "../../components/SocialNetwork";
// import Showcase from "../../components/Showcase";

const Home = () => {
  return (
    <section>
      <div>
      {/* <Showcase /> */}
        <Navigation />
        
        <SocialNetwork />
      </div>
    </section>
  );
};

export default Home;
