import UserActionsTypes from "./user.types";
import userReducer from "./user.reducer";

const initialState = {
  currentUser: null,
  error: null,
};

describe("userReducer", () => {
  it("should return initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should set currentUser to payload on GOOGLE_SIGN_IN_SUCCESS action", () => {
    const mockUser = { id: 1, displayName: "Panos" };

    expect(
      userReducer(initialState, {
        type: UserActionsTypes.GOOGLE_SIGN_IN_SUCCESS,
        payload: mockUser,
      }).currentUser
    ).toEqual(mockUser);
  });

  it("should set currentUser to null on signOutSuccess action", () => {
    expect(
      userReducer(initialState, {
        type: UserActionsTypes.SIGN_OUT_SUCCESS,
      }).currentUser
    ).toBe(null);
  });

  it("should set errorMessage to payload on GOOGLE_SIGN_IN_FAILURE, signUpFailure, signOutFailure action", () => {
    const mockError = {
      message: "errored",
      code: 404,
    };

    expect(
      userReducer(initialState, {
        type: UserActionsTypes.GOOGLE_SIGN_IN_FAILURE,
        payload: mockError,
      }).error
    ).toBe(mockError);

    expect(
      userReducer(initialState, {
        type: UserActionsTypes.SIGN_UP_FAILURE,
        payload: mockError,
      }).error
    ).toBe(mockError);

    expect(
      userReducer(initialState, {
        type: UserActionsTypes.SIGN_OUT_FAILURE,
        payload: mockError,
      }).error
    ).toBe(mockError);
  });
});
