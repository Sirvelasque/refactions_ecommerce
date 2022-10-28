import { NavLink } from "react-router-dom";
import { useState } from "react";
import Filters from "../Filters";

const MainMenu = ({toggleMenu}) => {
  const [show, setShow] = useState(false);
  const toggleShow = (i) => {
    if (i.name==="Catalogo" || i==="x") setShow(!show);
  };
  const toggleAll = (i) => {
    if (i.name==="Catalogo" || i==="x") {
      toggleShow(i);
      toggleMenu();
    }
  }
  const menuItems=[
    {
      name:'Inicio',
      icon:'fa-solid fa-house',
      k:1,
      task: toggleAll,
      link:"/",
    },
    {
      name:'Catalogo',
      icon:'fa-solid fa-dice-d6',
      k:2,
      task: toggleShow,
      link:"/Catalogo",
    },
    {
      name:'Quienes somos',
      icon:'fa-solid fa-book-open-reader',
      k:3,
      task: toggleAll,
      link:"/Detalles",
    },
    {
      name:'Contactanos',
      icon:'fa-solid fa-phone',
      k:4,
      task: toggleAll,
      link:"/",
    },
  ];

  const arrows = () => (
    <div id="main_arrows" className="arrows">
    {menuItems.map((i)=> (<div onClick={ () => toggleShow(i) }>{'>'}</div>))}
    </div>
  );

  return (
    <div id="main_menu" className='list_container'>
      <ul id="main_menu_list" className="filters">
        {menuItems.map((i)=>(
          <li className="filter_btn" key={i.k} onClick={ () => toggleShow(i) }>
            <NavLink to={i.link}>
              <i className={i.icon} > </i> {i.name} 
            </NavLink>
          </li>
          ))}
      </ul>
      {arrows()}

      <div id="Catalogue" className={show ? "show" : "hiden-r"}>
      <div className="exit" onClick={ () => toggleAll("x") }>
        <i className="fa-solid fa-x"></i>
      </div>
        <Filters />
      </div>
    </div>
  )
};

export default MainMenu;
