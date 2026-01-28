import React from "react";
import { Route,Routes } from "react-router-dom";
import Showbook from "./pages/showbook";
import Editbook from "./pages/editbook";
import Home from "./pages/home";
import Deletebook from "./pages/deletebook";
import Createbook from "./pages/createBook";

const App=()=>{
  return(
   
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/books/create" element={<Createbook/>} />
    <Route path="/books/details/:id" element={<Showbook/>} />
    <Route path="/books/delete/:id" element={<Deletebook/>} />
    <Route path="/books/edit/:id" element={<Editbook/>} />

    </Routes>
   
  )
}
export default App;