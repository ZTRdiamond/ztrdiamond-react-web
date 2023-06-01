import React from 'react';
import { Helmet } from 'react-helmet';
import NavbarComponent from '../components/Navbar';
import '../style/style.css';
const utils = require('../lib/utils');

function HomePage() {
  const navItems = [
    {id:1, path:"/", label:"Home"},
    {id:2, path:"/test", label:"Test"},
    {id:3, path:"/#title", label:"Title"}
  ];

  const umur = utils.AgeCalc('2005-11-27');

  return (
    <div>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <NavbarComponent items={navItems} />
      <br/><br/><br/><br/><br/>
      <div>
      <h1 className="homepage-title">Hello, I'm <span className="ZTRdiamond">ZTRdiamond</span></h1>
      <p className="homepage-desc">I come from Indonesia, I am someone who likes to learn interesting things, I also like programming, watching movies or anime, playing games and drawing. I am currently developing my programming skills to the next level by myself.</p>
      </div>
      <br/><br/><br/>
      <div className="wall-bg">
          <div>
          <h2 className="homepage-title-intro">Introduction</h2>
          <p className="homepage-desc-intro">I am a discord bot developer who usually uses the Aoi.js package, besides that I can also create simple websites like this. I am quite familiar with the field of creating bots with the Aoi.js package and understand basic javascript, To create a website I am quite familiar with the code, I usually use Html, Css, and Bootstrap to create websites because I think the bootstrap framework is quite simple and easy to understand.</p>
          </div>
      </div>
    </div>
  );
}

export default HomePage;
