import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import BlogPost from "../components/BlogPost"
import '../style/style.css';

function BlogPage() {
  const navItems = [
    {id: 1, path:"#tech", label:"Tech Stack"},
    {id: 2, path:"#project", label:"Project"},
    {id: 3, path:"#contact", label:"Contact"}
  ];

  // Mengganti nilai 'blog-post-id' dengan nilai yang sesuai dengan ID posting blog yang diinginkan
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <NavbarComponent items={navItems} />
      <br/><br/><br/><br/><br/>
      <div>
        <BlogPost id={id} />
      </div>
    </div>
  )
}

export default BlogPage;
