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
