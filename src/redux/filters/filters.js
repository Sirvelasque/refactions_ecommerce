const UPDATEBRANDS = 'refactions_ecoomerce/filters/UPDATEBRANDS';

const defaultBrands = []

export default function filtersReducer(State = defaultBrands, action) {
  switch(action.type) {
    case UPDATEBRANDS:
      return action.filters;
    default:
      return State;
  }
}

export const newFilter = (filter) => async (dispatch) => {
  dispatch ({
    type: UPDATEBRANDS,
    filters: filter
  })
}
