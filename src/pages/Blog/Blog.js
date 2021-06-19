import React from 'react';
import {Navbar,Nav,Image,Button,Container} from 'react-bootstrap';
import Head from'./Blognavbar'
import Blogmain from './Blogmain'




function Blog() {
  return (
  <div className="container">
    <Head/>
    <Blogmain/>
  </div>
  );
}

export default Blog;
