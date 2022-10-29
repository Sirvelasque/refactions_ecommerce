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
      name: 'rt-hex2200',
      prize: 900,
      brand: 'Iphone',
      tags: ['Pantalla', 'Flex',],
      img: 'https://cart-products.cdn.ifixit.com/cart-products/1YVWyB6gy6pesSbH.medium',
    },
    {
      id: 2,
      name: 'lp-hex123',
      prize: 750,
      brand: 'Samsung',
      tags: ['Pantalla', 'Panel tactil',],
      img: 'https://cart-products.cdn.ifixit.com/cart-products/1YVWyB6gy6pesSbH.medium',
    },
  ]
    
    dispatch({
      type: GETITEMS,
      items: items,
    });
  
}

export { updateItems };
