import UserActionsTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (error) => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (error) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionsTypes.CHECK_USER_SESSION,
});

export const checkUserSessionSuccess = (userAuth) => ({
  type: UserActionsTypes.CHECK_USER_SESSION_SUCCESS,
  payload: userAuth,
});

export const checkUserSessionFailure = (error) => ({
  type: UserActionsTypes.CHECK_USER_SESSION_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionsTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionsTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionsTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionsTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionsTypes.SIGN_UP_FAILURE,
  payload: error,
});
