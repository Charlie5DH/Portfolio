import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrMedium } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <GrMedium />
    </div>
    <div>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;
