import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          {/* <span>👋</span> */}
          <span>
            <img src="https://media.giphy.com/media/FAFo1M7EC4gRZ4HETH/giphy.gif" width="60px" alt="wave" />
          </span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Carlos</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Phd Student 🎓</p>
          <p className="p-text">Researcher 📚</p>
          <p className="p-text">Full Stack Developer 🧑🏻‍💻</p>
          <p className="p-text">Data Scientis 📈</p>
          <p className="p-text">Entrpeneur 🚀</p>
          <p className="p-text">AI & ML lover 🦾</p>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Looking to collaborate 🤝</p>
          <p className="p-text">Applying AI to IoT solutions</p>
          <p className="p-text">Combined with Web Dev</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile2} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
      {[images.javascriptCircle, images.react, images.redux, images.python, images.tensorflow].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
