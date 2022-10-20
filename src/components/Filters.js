import { useSelector } from "react-redux";

const Filters = () => {
  const filters = [
    {
      cat: "Pantalla",
      icon: "fas fa-mobile",
    },
    {
      cat: "Camara",
      icon: "fas fa-mobile",
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
  const brands = useSelector((state) => state.brands)
  const arrows = ">"

  return (
    <div className="menu_container">
      <h2>Categorias</h2>
      <ul className="filters">
        {filters.map((i) => (<li className="filter_btn"><i className={i.icon} /> {i.cat} {arrows}</li>))}
      </ul>
      <div className="brands">
        {console.log(brands)}
        {brands.map((i) => (
        <div>
          <input type="checkbox"/> 
          <span>{i}</span>
        </div>
        ))}
      </div>
    </div>
  )

}

export default Filters;