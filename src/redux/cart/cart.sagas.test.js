import { takeLatest, put } from "redux-saga/effects";

import UserActionsTypes from "../user/user.types";
import { ClearCart } from "./cart.actions";

import { clearCartOnSignOut, onSignOutSuccess } from "./cart.sagas";

describe("on signout success saga", () => {
  it("should trigger on SIGN_OUT_SUCCESS", async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

describe("clear cart on signout saga", () => {
  it("should fire clearCart", () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(ClearCart()));
  });
});
