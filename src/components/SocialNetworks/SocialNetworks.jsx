import React from "react";
import classes from "./SocialNetworks.module.css";
import picSocialNetworks from "../../img/instagram1.png";

const SocialNetworks = () => {
  return (
    <div className={classes.socialNetworks}>
      <a
        href="https://instagram.com/coloritmagazine?igshid=18x35wdzuaokb"
        target="blank"
      >
        <img src={picSocialNetworks} alt="Social networks" />
      </a>
    </div>
  );
};

export default SocialNetworks;
