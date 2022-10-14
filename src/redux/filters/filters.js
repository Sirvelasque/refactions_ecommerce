const UPDATEBRANDS = 'refactions_ecoomerce/filters/UPDATEBRANDS';

const defaultBrands = ["Alcatel", "Huawei", "Iphone", "LG",]

export default function brandsReducer(State = defaultBrands, action) {
  switch(action.type) {
    case UPDATEBRANDS:
      return action.newbrands;
    default:
      return State;
  }
}
