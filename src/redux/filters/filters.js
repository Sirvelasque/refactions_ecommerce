const UPDATEBRANDS = 'refactions_ecoomerce/filters/UPDATEBRANDS';
const QUITBRANDS = 'refactions_ecoomerce/filters/QUITBRANDS';

const defaultBrands = {
  brands: [],
  tags:[],
};

export default function filtersReducer(state = defaultBrands, action) {
  switch(action.type) {
    case UPDATEBRANDS:
      return {
        ...state,
        brands: [
          ...state.brands,
          action.filters,
        ]
      }
    case QUITBRANDS:
      return {
        ...state,
        brands: [
          ...state.brands.filter((brand) => brand !== action.filters),
        ]
      }
    default:
      return state;
  }
}

export const newFilterBrand = (filter) => async(dispatch) => {
  dispatch ({
    type: UPDATEBRANDS,
    filters: filter
  })
}

export const quitBrand = (filter) => async(dispatch) => {
  dispatch ({
    type: QUITBRANDS,
    filters: filter
  })
}
