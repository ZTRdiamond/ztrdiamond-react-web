// eslint-disable-next-line
import React from 'react';
import { Helmet } from 'react-helmet';

//components
import NavbarComponent from '../components/Navbar';

//image
import SadCat from '../assets/img/sad-cat.webp';

const NotFoundPage = () => {
  const navItems = [
    {id:1, path:"/", label:"Home"}
  ];
  
  return (
    <div>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <NavbarComponent items={navItems} />
      <br/><br/><br/>
      <h1 className="pnf-title">Page Not Found...</h1>
      <img src={SadCat} className="pnf-img" alt="sad-cat.webp"/>
      <br/><br/>
      <a href="/" className="pnf-btn">Back to home</a>
      <br/><br/>
    </div>
  );
};

export default NotFoundPage;