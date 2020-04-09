import UserActionsTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionsTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionsTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionsTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionsTypes.CHECK_USER_SESSION_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionsTypes.CHECK_USER_SESSION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionsTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionsTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
