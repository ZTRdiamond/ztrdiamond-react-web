import React from 'react';
import { Helmet } from 'react-helmet';
import NavbarComponent from '../components/Navbar';
import '../style/style.css';

//tech stack img
import HtmlSvg from '../assets/icons/html.svg';
import CssSvg from '../assets/icons/css.svg';
import JsSvg from '../assets/icons/javascript.svg';
import Bs from '../assets/icons/bootstrap.svg';
import ReactSvg from '../assets/icons/reactjs.svg';
import AoiJs from '../assets/icons/aoijs.webp';

//card img
import WaVi from '../assets/card/wavi.webp';
import ZnApi from '../assets/card/zanixonapi.webp';
import ZanixonMD from '../assets/card/zanixonmd.webp';

//contact icons
import { BsDiscord, BsGithub, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

//utils function
const utils = require('../lib/utils'); 

function HomePage() {
  const navItems = [
    {id:1, path:"#tech", label:"Tech Stack"},
    {id:2, path:"#project", label:"Project"},
    {id:3, path:"#contact", label:"Contact"}
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
      <p className="homepage-desc">I'm from Indonesia, I like programming, like reading and also like to learn interesting things.</p>
      </div>
      <br/><br/><br/>
      <div className="wall-bg">
          <div>
          <h2 className="homepage-title-intro">Introduction</h2>
          <p className="homepage-desc-intro">Hello my name is Fatahillah, I am {umur} years old, I come from Indonesia and live in Tangerang. This is my personal website created with the aim of introducing myself, On this website I share some information about me.</p>
          <br></br>
          <h2 className="homepage-title-intro">My journey after covid</h2>
          <p className="homepage-desc-intro">I like to learn things that interest me, so I have also learned various things even though not too much but enough to make me satisfied and proud because I have tried it, before Indonesia entered the pandemic period I had learned digital drawing such as vectors and anime but I realized I was not good at it so I tried to make videos on the YouTube platform during the pandemic with minecraft game content and succeeded at first, However, due to several obstacles such as limited devices, inadequate internet, difficulty dividing time so I left that field and tried the programming field, at first I was quite difficult in that field because I did not have basic skills but because I kept trying and thinking optimistically, In 2 years I was able to master the programming field until I could create this website. I really like the javascript programming language because the code is easy to understand, easy enough to apply to my various ideas and also works and is stable on the device I use. I will continue to develop this website and my next plan is to add a blog to this website, thank you for reading a little of my journey from the pandemic to the end of the pandemic, it was nice to meet you ^_^.</p>
          <h2 className="homepage-title-intro" id="tech">Tech Stack</h2>
			<div className="tech-stack">
			  <a href="https://reactjs.org" className="tech-link">
			    <img src={ReactSvg} alt="React.js"/>
			  </a>
			  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="tech-link">
			    <img src={JsSvg} alt="JavaScript"/>
			  </a>
			  <a href="https://getbootstrap.com" className="tech-link">
			    <img src={Bs} alt="Bootstrap"/>
			  </a>
			  <a href="https://aoi.js.org" className="tech-link">
			    <img src={AoiJs} alt="Aoi.js"/>
			  </a>
			  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="tech-link">
			    <img src={HtmlSvg} alt="HTML"/>
			  </a>
				  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="tech-link">
			    <img src={CssSvg} alt="CSS"/>
			  </a>
			</div>
          </div>
      </div>
      <div className="wall-bg-dark">
        <h2 className="homepage-title-project" id="project">My Project</h2>        <div className="project-card-container">
        
          <a className="project-card-btn" href="https://github.com/ZTRdiamond/ZanixonAPI">
          <div className="project-card">
          <h3 className="project-card-title">ZanixonAPI</h3>
          <div className="project-card-content">
          <img src={ZnApi} className="project-card-img" alt="Project" />
          <p className="project-card-desc">A free API with unlimited usage and no apikey for everyone, which I have created.</p>
          <br/><br/>
          </div>
          </div>
          </a>
        
          <a className="project-card-btn" href="https://ztrdiamond.github.io/znbotweb">
          <div className="project-card">
          <h3 className="project-card-title">ZanixonMD</h3>
          <div className="project-card-content">
          <img src={ZanixonMD} className="project-card-img" alt="Project" />
          <p className="project-card-desc">WhatsApp sticker bot to create stickers on whatsapp with unlimited usage</p>
          </div>
          </div>
          </a>
        
          <a className="project-card-btn" href="https://github.com/ZTRdiamond/warung-virtual-discord-bot">
          <div className="project-card">
          <h3 className="project-card-title">Warung Virtual</h3>
          <div className="project-card-content">
          <img src={WaVi} className="project-card-img" alt="Project" />
          <p className="project-card-desc">Economy discord bot with restaurant theme in Indonesia</p>
          </div>
          </div>
          </a>
          
        </div>
        </div>
        <div>
        <h2 className="contact-title" id="contact">Contact</h2>
		    <div className="contact-list">
                <a href="https://discord.com/invite/sXTXFJZQtR" className="contact-link">
                    <div className="contact">
                        <BsDiscord className="contact-avatar" />
                        <span className="contact-name">ztrdiamond</span>
                    </div>
                </a>
                <a href="https://github.com/ZTRdiamond" className="contact-link">
                    <div className="contact">
                        <BsGithub className="contact-avatar" />
                        <span className="contact-name">ztrdiamond</span>
                    </div>
                </a>
                <a href="https://twitter.com/ZTRdiamond" className="contact-link">
                    <div className="contact">
                        <BsTwitter className="contact-avatar" />
                        <span className="contact-name">ztrdiamond</span>
                    </div>
                </a>
                <a href="https://youtube.com/fthplayz" className="contact-link">
                    <div className="contact">
                        <BsYoutube className="contact-avatar" />
                        <span className="contact-name">ztrdiamond</span>
                    </div>
                </a>
                <a href="https://instagram.com/ztr.diamond" className="contact-link">
                    <div className="contact">
                        <BsInstagram className="contact-avatar" />
                        <span className="contact-name">ztr.diamond</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
