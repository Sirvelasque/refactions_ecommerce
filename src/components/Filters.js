import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { newFilterBrand, quitBrand } from "../redux/filters/filters";
import './css/filters.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Filters = () => {
  const [value, setValue] = useState([200, 2017]);
  const [showsub, setShowsub] = useState(false);
  const dispatch = useDispatch();
  let counting = 0;

  const [subFilter, setSubFilter] = useState('Pantalla');

  const filters = [
    {
      cat: "Sistema",
      icon: "fas fa-battery-three-quarters",
      subs: ['Bateria', 'Procesador', 'Ram'],
    },
    {
      cat: "Pantalla",
      icon: "fas fa-mobile",
      subs: ['Flex', 'Panel de pantalla tactil'],
    },
    {
      cat: "Camara",
      icon: "fa-solid fa-camera",
      subs: ['Camara', 'Flash'],
    },
    {
      cat: "Sonido",
      icon: "fas fa-music",
      subs: ['Bocina', 'Microfono'],
    },
    {
      cat: "Accesorios",
      icon: "fab fa-dribbble",
      subs: ['Protector', 'Utiles'],
    }
  ];
  const subFilters = {
    "Sistema": [],
    "Pantalla": [],
    "Camara": [],
    "Sonido": [],
    "Accesorios": [],
  }
  const subFiltersArray = [];
  const brands = ["Alcatel", "Iphone", "Lg", "Samsung", "Xiaomi"];

  const [checkedState, setCheckedState] = useState(
    new Array(11).fill(false)
  );
  const [brandsState, setBrandsState] = useState(
    new Array(4).fill(false)
  );

  const handleSub = (i) =>{
    setSubFilter(i.cat);
    setShowsub(true);
  }

  const toggleSub = () => {
    setShowsub(!showsub)
  }

  const arrows = () => (
    <div className="arrows">
    {filters.map(()=> (<div>{'>'}</div>))}
    </div>
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubCheckbox = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
  );
  
  setCheckedState(updatedCheckedState);
  }

  const sendBrand = (brand) => {
    dispatch(newFilterBrand(brand));
  }

  const takeBrand = (brand) => {
    dispatch(quitBrand(brand));
  }

  const handdleBrands = (position) => {
    const updatedBrandState = brandsState.map((item, index) =>
    index === position ? !item: item
    );
    updatedBrandState ? sendBrand(brands[position]) : takeBrand(brands[position]);
    setBrandsState(updatedBrandState);
  }

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
            const num = counting;
            subFilters[i.cat].push(<li className="filter_btn" onClick={() => handleSubCheckbox(num)}><input type="checkbox" className="brand_check" checked={checkedState[num]}/> {i.subs[j]}</li>);
            counting += 1;
          }
          subFiltersArray.push(subFilters[i.cat]);
          return(
          <li className="filter_btn" onClick={() => handleSub(i)}><i className={i.icon} /> {i.cat}</li>
          );
        }
        )}
      </ul>
        {arrows()}
      </div>
      <hr/>

      <div className="brands_container">
      <div className="brands">
        {brands.map((i, num) => (
        <div className="brand">
          <input type="checkbox" className="brand_check" checked={brandsState[num]} onChange={()=> handdleBrands(num)}/> 
          <span>{i}</span>
        </div>
        ))}
      </div>
      </div>
      <hr />
      <div className="ranges">
        <h3>Precio</h3>
        <Box sx={{width:240}}>
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
          <div id="sub_filters">
            {filters.map((i)=>(
              <div className="sub_box">
                <hr />
                {subFilter === i.cat ? <ul className="filters">{subFilters[i.cat]}</ul> :<div></div>}
              </div>
            ))}
          </div>
      </div>
    </div>
  )

}

export default Filters;