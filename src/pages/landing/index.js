import React from "react";
import {  useHistory } from "react-router-dom";
import "./index.css";
const Landing = () => {
  const history = useHistory();
  const handleClick=()=>{
    history.push("/login")
  }
  return (
    <div className="container">
      <div className="hello-container">
        <p className="hello-title">
          Hello <span className="hello-span"> 👋</span>
        </p>
        <p className="hello-content">
          I hope everyone is safe and sound. I designed different type of
          lending pages,application. it can help others to develop more ideas
          from this. I keep it simple and minimal. It can also help you find
          different options in exploring and improving your skills.
          <br />
          <br /> I am available for new projects. I hope you show me your
          support 😄
          <br />
          <br /> I wish you luck,
          <br /> OKM❤️
        </p>
        <button className="hello-button" onClick={handleClick}>Buy me a Coffee</button>
      </div>
      <div className="hello-container-2">
        <div className="landing-picture">
          <img src={"/hellopage.png"} alt="helloPage"></img>
        </div>
      </div>
    </div>
  );
};
export default Landing;
