import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateItems } from "../redux/items/items";
import './css/catalogue.css'

const Catalogue = () => {
  const filt = useSelector((state) => state.brands);
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(updateItems());
    console.log(items)
  }, [])
  useEffect(()=> {

  });
  return (
    <div className="catalogue">
      {items.map((i) => (
      <div key={i.id} className="item">
        <img alt="item" src={i.img} />
        <div className="item_info">
          <div className="brand">{i.brand} X</div>
          <div className="item_name">{i.name}</div>
          <div className="item_tags">
          {i.tags.map((tag)=>(<span className="tag">{tag} </span>))}
          </div>
          <div className="prize">${i.prize} MXN</div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Catalogue;
