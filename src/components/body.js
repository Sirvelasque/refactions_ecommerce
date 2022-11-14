import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import './css/body.css'

const Home = lazy(() => import("./Home"));
const Catalogue = lazy(() => import("./Catalogue"));
const BuySec = lazy(() => import("./BuySec"));

const Body = () => {

  return (
      <Suspense fallback={<h2>LOADING...</h2>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Catalogo" element={<Catalogue />} />
      <Route path="Detalles" element={<BuySec />} />
    </Routes>
    </Suspense>
  )

}

export default Body;