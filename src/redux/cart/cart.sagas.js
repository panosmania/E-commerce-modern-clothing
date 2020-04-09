import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionsTypes from "../user/user.types";
import { ClearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(ClearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
