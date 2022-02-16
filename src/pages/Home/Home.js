import React from "react";
/* ******************** IMPORT COMPONENTS *************** */
import Navigation from "../../containers/Navigation/Navigation";
import TitleNameHome from "../../components/TitleNameHome/TitleNameHome";
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';
// import LogoGB from '../../components/Logo/Logo';




/* ******************** PAGE HOME *************** */

const Home = () => {
  return (

    
    
      <div className="bg-1">
        <Navigation />
        {/* <LogoGB /> */}
        <TitleNameHome />
        <SocialNetwork />
      </div>

  

  );
};

export default Home;
