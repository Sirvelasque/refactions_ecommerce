import { useState } from "react";
import Filters from "./Filters";
import MainMenu from "./menus/mainMenu";
import './css/header.css'
import './css/header850.css'

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [contact, setContact] = useState(false);
  const toggleContact = () => {
    setContact(!contact);
  }
  const toggleMenu = () => {
  setMenuShow(!menuShow);
  }
  return (
  <header>
    <div id="navbar_mobile">
      <div className="mobile_bar">
        <div className="logo">Logo</div>
        <div className="navbar_mobile_btns">
          <div className="mobile_menu_btn" onClick={ () => toggleContact() }><i className="fa-solid fa-cart-shopping"></i></div>
          <div className="mobile_menu_btn" onClick={ () => toggleMenu() }><i className="fa-solid fa-bars"></i></div>
        </div>
      </div>
      <div id="mobile_menu" className={menuShow ? "show" : "hiden-u"}>
      <div className="exit" onClick={ () => toggleMenu() }>
        <i className="fa-solid fa-x"></i>
      </div>
        <MainMenu toggleMenu={toggleMenu}/>
      </div>
    </div>
    {/* --------------- */}
    <div id="navbar_desktop">
    <div className="contact_bar">
      <div className="about">
        Nosotros | Blog | Contacto  
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
    </div>
    <div className="header_foot">
      <div className="logo">Logo</div>
      <form className="search"><input type="text" id="search" name="search" /> <button type="submit"><i className="fas fa-search"></i></button> </form>
    </div>
    </div>
  </header>
);
};

export default Header;
