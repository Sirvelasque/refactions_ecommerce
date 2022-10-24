import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateItems } from "../redux/items/items";

const Catalogue = () => {
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(updateItems());
    console.log(items)
  }, [])
  return (
    <div className="catalogue">
      Catalogue
      {items.map((i) => (
      <div key={i.id} className="item">
        <img alt="item" src={i.img} />
        <div className="item_info">
          <div className="item_name">{i.name}</div>
          <div className="item_tags">
          {i.tags.map((tag)=>(<div className="spam">{tag} </div>))}
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Catalogue;
