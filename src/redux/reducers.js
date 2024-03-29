import { ADD_ITEM, REMOVE_ITEM, INCREASE, DECREASE } from "./actions";
import Data from "../Data/data";

export const Sum = (items) => {
  let itemCount = items.reduce((total, product) => total + product.quantity, 0);
  let total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  let discount = items.reduce(
    (total, product) => total + product.discount * product.quantity,
    0
  );
  let typeItem = items.filter((item) => item.type === "fiction");
  let typeDiscount = typeItem.reduce(
    (total, product) => total + product.price * 0.15 * product.quantity,
    0
  );
  return { itemCount, total, discount, typeDiscount };
};

const InitialState = {
  items: Data,
  ...Sum(Data),
};

export const CartReducers = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: state.items.concat({
          ...action.item,
          quantity: 1,
        }),
        ...Sum(Data)
      });

    case REMOVE_ITEM:
      return {
        ...state,
        ...Sum(state.items.filter((item) => item.id !== action.id)),
        items: [...state.items.filter((item) => item.id !== action.id)],
      };
    case INCREASE:
      state.items[state.items.findIndex((item) => item.id === action.id)]
        .quantity++;
      return {
        ...state,
        ...Sum(state.items),
        items: [...state.items],
      };
    case DECREASE:
      state.items[state.items.findIndex((item) => item.id === action.id)]
        .quantity--;
      return {
        ...state,
        ...Sum(state.items),
        items: [...state.items],
      };

    default:
      return state;
  }
};
