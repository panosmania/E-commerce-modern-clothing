import ShopActionTypes from "./shop.types";
import shopReducer from "./shop.reducer";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

describe("shopReducer", () => {
  it("should return initial state", () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it("should return isFetching: true in FETCH_COLLECTIONS_START", () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
      }).isFetching
    ).toEqual(true);
  });

  it("should return isFetching: true in FETCH_COLLECTIONS_SUCCESS", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems,
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      collections: mockItems,
    });
  });

  it("should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure", () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: "error",
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: "error",
    });
  });
});
