import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import './css/filters.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Filters = () => {
  const [value, setValue] = useState([200, 2017]);
  const [showsub, setShowsub] = useState(false);
  const toggleSub = () => {
    setShowsub(!showsub)
  }

  const pantallaRef = useRef(null);
  const sistemaRef = useRef(null);
  const camaraRef = useRef(null);
  const sonidoRef = useRef(null);
  const accesoriosRef = useRef(null);

  const filters = [
    {
      cat: "Sistema",
      icon: "fas fa-battery-three-quarters",
      subs: ['Bateria', 'Procesador', 'Ram'],
      goRef: function () {
        sistemaRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
      }
    },
    {
      cat: "Pantalla",
      icon: "fas fa-mobile",
      subs: ['Flex', 'Panel de pantalla tactil'],
      goRef: function () {
        pantallaRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
      }
    },
    {
      cat: "Camara",
      icon: "fa-solid fa-camera",
      subs: ['Camara', 'Flash'],
      goRef: function () {
        camaraRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
      }
    },
    {
      cat: "Sonido",
      icon: "fas fa-music",
      subs: ['Vocina', 'Microfono'],
      goRef: function () {
        sonidoRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
      }
    },
    {
      cat: "Accesorios",
      icon: "fab fa-dribbble",
      subs: ['Protector', 'Utiles'],
      goRef: function () {
        accesoriosRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
      }
    }
  ];

  const subFilters = {
    "Sistema": [],
    "Pantalla": [],
    "Camara": [],
    "Sonido": [],
    "Accesorios": [],
  }

  const brands = ["Alcatel", "Iphone", "Lg", "Samsung", "Xiaomi"];

  const filt = useSelector((state) => state.brands);
  const [subFilter, setSubFilter] = useState('Pantalla');

  const handleSub = (i) =>{
    setSubFilter(i.cat);
    setShowsub(true);
    i.goRef();
  }

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
        {filters.map((i) => {
          for(let j = 0; j < i.subs.length; j+=1){
            subFilters[i.cat].push(<li className="filter_btn"><input type="checkbox" className="brand_check"/> {i.subs[j]}</li>)
          }
          return(
          <li className="filter_btn" onClick={() => handleSub(i)}><i className={i.icon} /> {i.cat}</li>
          )
        }
        )}
      </ul>
        {arrows()}
      </div>
      <hr/>
      <div className="brands_container">
      <div className="brands">
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
      <div id="filters_plus" className={showsub ? "show" : "hide-l"}>
        <div className="exit" onClick={ () => toggleSub() }>
        <i className="fa-solid fa-x"></i>
        </div>
        <div>
          <div id="sub_filters">
              <div className="sub_filters_list">
              <div ref={sistemaRef} className="sub_box">
                <h3 >Sistema</h3><hr />
                <ul className="filters">
               {subFilters.Sistema}
                </ul>
                </div>

                <div ref={pantallaRef} className="sub_box">
                <h3>Pantalla</h3><hr />
                <ul className="filters">
                {subFilters.Pantalla}
                </ul>
                </div>

                <div ref={camaraRef} className="sub_box">
                <h3>Camara</h3><hr />
                <ul className="filters">
                {subFilters.Camara}
                </ul>
                </div>

                <div ref={sonidoRef} className="sub_box">
                <h3 ref={sonidoRef}>Sonido</h3><hr />
                <ul className="filters">
                {subFilters.Sonido}
                </ul>
                </div>
                
              <div ref={accesoriosRef} className="sub_box">
               <h3>Accesorios</h3><hr />
                <ul className="filters">
                {subFilters.Accesorios}
                </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )

}

export default Filters;