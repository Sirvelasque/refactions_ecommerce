import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogue from "./Catalogue";
import Home from "./Home";
import BuySec from "./BuySec";
import './css/body.css'

const Body = () => {

  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Catalogo" element={<Catalogue />} />
      <Route path="Detalles" element={<BuySec />} />
    </Routes>
    // </BrowserRouter>
  )

}

export default Body;