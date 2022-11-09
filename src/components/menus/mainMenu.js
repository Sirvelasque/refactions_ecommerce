import { NavLink } from "react-router-dom";
import { useState } from "react";
import Filters from "../Filters";

const MainMenu = ({toggleMenu}) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const toggleAll = () => {
      toggleShow();
      toggleMenu();
  }
  const menuItems=[
    {
      name:'Inicio',
      icon:'fa-solid fa-house',
      k:1,
      task: toggleMenu,
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
      task: toggleMenu,
      link:"/Detalles",
    },
    {
      name:'Contactanos',
      icon:'fa-solid fa-phone',
      k:4,
      task: toggleMenu,
      link:"/",
    },
  ];

  const arrows = () => (
    <div id="main_arrows" className="arrows">
    {menuItems.map((i)=> (<div onClick={ (e) => toggleMenu(e) }>{'>'}</div>))}
    </div>
  );

  return (
    <div id="main_menu" className='list_container'>
      <ul id="main_menu_list" className="filters">
        {menuItems.map((i)=>(
            <NavLink to={i.link}>
          <li className="filter_btn" key={i.k} onClick={ (e) => i.task(e) }>
              <i className={i.icon} > </i> {i.name} 
          </li>
            </NavLink>
          ))}
      </ul>
      {arrows()}

      <div id="Catalogue" className={show ? "show" : "hiden-r"}>
      <div className="exit" onClick={ () => toggleAll() }>
        <i className="fa-solid fa-x"></i>
      </div>
        <Filters />
        <button type="button" className="ready-btn" onClick={ () => toggleAll() }>Listo</button>
      </div>
    </div>
  )
};

export default MainMenu;
