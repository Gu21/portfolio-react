import React from "react";
/* ******************** IMPORT COMPONENTS *************** */
import Navigation from "../../containers/Navigation/Navigation";
import TitleNameHome from "../../components/TitleNameHome/TitleNameHome";
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';




/* ******************** PAGE HOME *************** */

const Home = () => {
  return (

    /* ******************** HOME PAGE COMPONENTS *************** */

    <>
      <div className="bg-1">
        <Navigation />
        <TitleNameHome />
        <SocialNetwork />
      </div>

    </>

  );
};

export default Home;
