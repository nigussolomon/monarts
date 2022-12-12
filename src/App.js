import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import Paintings from "./Layouts/Paintings";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/paintings" element={<Paintings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
