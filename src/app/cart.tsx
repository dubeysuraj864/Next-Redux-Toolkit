import { useReducer, createContext, ReactNode, useContext } from "react";

interface CartState {
  count: number;
}

interface Action {
  type: string;
  // Add any other properties your actions might have
}

const ActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
} as const;

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        count: state.count + 1,
      };
    // Add other cases for different actions if needed
    default:
      return state;
  }
};

interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<Action>;
}

const initialCartState: CartState = {
  count: 0,
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
