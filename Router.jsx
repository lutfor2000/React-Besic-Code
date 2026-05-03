
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
