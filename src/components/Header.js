import { NavLink } from "react-router-dom";

const Header = () => {
  return (
  <header>
    <div className="contact_bar">
      <div className="about">
        Nosotros | Blog | Contacto | 
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
    <div id="navbar">
      <div className="logo">Logo</div>
      <div className="menu">
        {/* <NavLink to="/">
        <i class="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to="">Productos |</NavLink>
        <NavLink to="">Tiendas</NavLink> */}
      </div>
      <form className="search"><input type="text" id="search" name="search" /> <button type="submit"><i className="fas fa-search"></i></button> </form>
    </div>
  </header>
);
};

export default Header;
