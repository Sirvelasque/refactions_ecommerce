const GETITEMS = 'Refactions_ecommerce/items/GETITEMS';
const defaulta = {
  id: 1,
  name: 'rt-hex',
  tags: ['screen', 'cellphone', 'iphone'],
  img: 'https://cart-products.cdn.ifixit.com/cart-products/1YVWyB6gy6pesSbH.medium',
};

export default function itemsReducer(State=[defaulta] , action) {
  switch(action.type) {
    case GETITEMS:
      return action.items;
    default:
      return State;
  }
}

const updateItems = () => async (dispatch) => {
  const items = [
    {
      id: 1,
      name: 'rt-hex',
      tags: ['screen', 'cellphone', 'iphone'],
      img: 'https://cart-products.cdn.ifixit.com/cart-products/1YVWyB6gy6pesSbH.medium',
    },
    {
      id: 2,
      name: 'lp-hex',
      tags: ['screen', 'cellphone', 'samsung'],
      img: 'https://cart-products.cdn.ifixit.com/cart-products/1YVWyB6gy6pesSbH.medium',
    },
  ]
    
    dispatch({
      type: GETITEMS,
      items: items,
    });
  
}

export { updateItems };
