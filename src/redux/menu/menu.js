const CHOOSEMENU

export default function itemsReducer(State="" , action) {
  switch(action.type) {
    case CHOOSEMENU:
      return action.menu;
    default:
      return State;
  }
}