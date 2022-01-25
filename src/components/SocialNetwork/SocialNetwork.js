import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialNetwork = () => {

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/guillaume-bisson-323067212/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover">
          <li><FaLinkedinIn className="fab fa-linkedin" /></li>
        </a>
        <a
          href="https://github.com/Gu21"
          target="_blank"
          rel="noopener noreferrer"
          className="hover">
          <li><FaGithub className="fab fa-github" /></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
