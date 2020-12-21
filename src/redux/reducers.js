export const CartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        if (!state.items.find((item) => item.id === action.item.id)) {
          state.items.push({
            ...action.item,
            quantity: 1,
          });
        }
      case "REMOVE_ITEM":
        return {
          ...state,
          ...sumItems(state.items.filter((item) => item.id !== action.id)),
          items: [...state.items.filter((item) => item.id !== action.id)],
        };
      case "INCREASE":
        state.items[state.items.findIndex((item) => item.id === action.id)]
          .quantity++;
        return {
          ...state,
          ...sumItems(state.items),
          items: [...state.items],
        };
      case "DECREASE":
        state.items[state.items.findIndex((item) => item.id === action.id)]
          .quantity--;
        return {
          ...state,
          ...sumItems(state.items),
          items: [...state.items],
        };
  
      default:
        return state;
    }
  };
  