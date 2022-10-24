import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useState } from "react";
import './css/filters.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Filters = () => {
  const [value, setValue] = useState([200, 2017])
  const filters = [
    {
      cat: "Pantalla",
      icon: "fas fa-mobile",
    },
    {
      cat: "Camara",
      icon: "fa-solid fa-camera",
    },
    {
      cat: "Bateria",
      icon: "fas fa-battery-three-quarters",
    },
    {
      cat: "Sonido",
      icon: "fas fa-music",
    },
    {
      cat: "Accesorios",
      icon: "fab fa-dribbble",
    }
  ];
  const brands = ["Alcatel", "Iphone", "Lg", "Samsung", "Xiaomi"];
  const filt = useSelector((state) => state.brands);
  const arrows = () => (
    <div className="arrows">
    {filters.map(()=> (<div>{'>'}</div>))}
    </div>
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="menu_container">
      <form className="search"><input type="text" id="search" name="search" /> <button type="submit"><i className="fas fa-search"></i></button> </form>
      <h2>Filtros</h2>
      <hr />
      <h3>Ordenar por modelo</h3>
      <label className="switch">
        <input type="checkbox" />
        <div className="slider round"></div>
      </label>
      <div className="list_container">
      <ul className="filters">
        {filters.map((i) => (<li className="filter_btn"><i className={i.icon} /> {i.cat}</li>))}
      </ul>
        {arrows()}
      </div>
      <hr/>
      <div className="brands_container">
      <div className="brands">
        {console.log(brands)}
        {brands.map((i) => (
        <div className="brand">
          <input type="checkbox" className="brand_check"/> 
          <span>{i}</span>
        </div>
        ))}
      </div>
      </div>
      <hr />
      <div className="ranges">
        <h3>Precio</h3>
        <Box sx={{width:300}}>
        <Slider
          getAriaLabel={() => 'Año'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={100}
          max={9000}
        > 
        </Slider>
        </Box>
      </div>
    </div>
  )

}

export default Filters;