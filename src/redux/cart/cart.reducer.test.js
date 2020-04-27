import CartActionsTypes from "./cart.types";
import cartReducer from "./cart.reducer";

const initialState = {
  hidden: true,
  cartItems: [],
};

describe("cartReducer", () => {
  it("should return initial state", () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("should toggle hidden with toggleHidden action", () => {
    expect(
      cartReducer(initialState, {
        type: CartActionsTypes.TOGGLE_CART_HIDDEN,
      })
    ).toEqual({
      hidden: false,
      cartItems: [],
    });
  });

  //με δευτερο τροπο (μπορει αντι για toEqual να μπει και toBe)
  it("should toggle hidden with toggleHidden action", () => {
    expect(
      cartReducer(initialState, { type: CartActionsTypes.TOGGLE_CART_HIDDEN })
        .hidden
    ).toEqual(false);
  });

  it("should increase quantity of matching item by 1 if addItem action fired with same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionsTypes.ADD_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it("should decrease quantity of matching item by 1 if removeItem action fired with same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionsTypes.REMOVE_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it("should remove item from cart if clearItemFromCart action fired with payload of existing item", () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem,
      }).cartItems.includes((item) => item.id === 1)
    ).toBe(false);
  });

  it("should clear cart if clearCart action fired", () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionsTypes.CLEAR_CART,
      }).cartItems.length
    ).toBe(0);
  });

  //με δευτερο τροπο
  it("should clear cart if clearCart action fired", () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionsTypes.CLEAR_CART,
      })
    ).toEqual({
      hidden: true,
      cartItems: [],
    });
  });
});
