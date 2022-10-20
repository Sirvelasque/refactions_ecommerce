import { NavLink } from "react-router-dom";
import { useState } from "react";
import Filters from "./Filters";
import './css/header.css'

const Header = () => {
  const [menuShow, setMenuShow] = useState("mobile_menu hiden");
  const [contact, setContact] = useState(false);
  const toggleContact = () => {
    setContact(!contact);
  }
  const toggleMenu = () => {
    if (menuShow === "mobile_menu"){
      setMenuShow("mobile_menu hiden");
    } else {
      setMenuShow("mobile_menu")
    }
  }
  return (
  <header>
    <div id="navbar_mobile">
      <div className="mobile_bar">
        <div className="logo">Logo</div>
        <div className="navbar_mobile_btns">
          <div className="mobile_menu_btn" onClick={ () => toggleContact() }><i className="fa-solid fa-phone"></i></div>
          <div className="mobile_menu_btn" onClick={ () => toggleMenu() }><i className="fa-solid fa-bars"></i></div>
        </div>
      </div>
      <div className={menuShow}>
      <div className="exit" onClick={ () => toggleMenu() }>
        <i className="fa-solid fa-x"></i>
      </div>
      <form className="search"><input type="text" id="search" name="search" /> <button type="submit"><i className="fas fa-search"></i></button> </form>
      <div className="login_btns">
        Iniciar sesion | Registrarme
      </div>
      <Filters />
      </div>
      <div className={contact ? "contact" : "contact hiden"}>
      <div className="exit" onClick={ () => toggleContact() }>
        <i className="fa-solid fa-x"></i>
      </div>
      <div className="conctact_bar_btns">
        <i className="fa-brands fa-facebook"></i>
         | 
        <i className="fa-brands fa-instagram"></i>
         |
        <i className="fa-brands fa-twitter"></i>
         | 
        <i className="fa-brands fa-whatsapp">(33)5555 5555</i>
      </div>
      </div>
    {/* <div className="contact_bar">
      <div className="about">
        Nosotros | Blog | Contacto | 
      </div>
      <div className="login_btns">
        Iniciar sesion | Registrarme
      </div>
    </div>
    <div className="header_foot">
      <form className="search"><input type="text" id="search" name="search" /> <button type="submit"><i className="fas fa-search"></i></button> </form>
      </div> */}
    </div>
    {/* --------------- */}
    <div id="navbar_desktop">
    <div className="contact_bar">
      <div className="about">
        Nosotros | Blog | Contacto | 
      </div>
      <div className="conctact_bar_btns">
        <i className="fa-brands fa-facebook"></i>
         | 
        <i className="fa-brands fa-instagram"></i>
         |
        <i className="fa-brands fa-twitter"></i>
         | 
        <i className="fa-brands fa-whatsapp">(33)5555 5555</i>
      </div>
      <div className="login_btns">
        Iniciar sesion | Registrarme
      </div>
      <div className="mobile_menu"><i className="fa-solid fa-bars"></i></div>
    </div>
    <div className="header_foot">
      <div className="logo">Logo</div>
      <form className="search"><input type="text" id="search" name="search" /> <button type="submit"><i className="fas fa-search"></i></button> </form>
    </div>
      <Filters />
    </div>
  </header>
);
};

export default Header;
