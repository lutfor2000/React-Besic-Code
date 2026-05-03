Link → Page change করে
Route → কোন page show হবে decide করে 

Link = যাওয়ার রাস্তা (Navigation)
Route = গন্তব্য (Destination render)

  
==> instal route cmd -> npm i react-router-dom

import { BrowserRouter,Routes,Route } from "react-router-dom"

import About from "./pages/About"
import Images from "./pages/Images"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
               
               <Route path ="/images" element ={<Images/>} />
               <Route path="/about" element = {<About/>} />
               <Route path="*" element={<NotFound/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}


//===============Routing Stape==============================

 <BrowserRouter>
     
          <NavMenu/>

          <Routes>

               <Route path ="/images" element ={<Images/>} />
               <Route path="/about" element = {<About/>} />
               <Route path="/form" element = {<Form/>} />
               <Route path="*" element={<NotFound/>}/>

          </Routes>
      </BrowserRouter>

//=====================Page Link=================
import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/images">Images</Link></li>
                <li><Link to="/form">Form</Link></li>
            </ul>
        </div>
    );
};

export default NavMenu;
