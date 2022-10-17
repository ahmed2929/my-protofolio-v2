/* eslint-disable */

import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SocialIcon } from "react-social-icons";


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/ahmed-khaled-9702a8154/' target='_blank'>
      <BsLinkedin />
      </a>
     
    </div>
    <div>
    <a href='https://github.com/ahmed2929' target='_blank'>
    <BsGithub />
      </a>
     
    </div>
  
  </div>
);

export default SocialMedia;
