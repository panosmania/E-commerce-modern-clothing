import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { CartDropdown } from "./cart-dropdown.component";
import CustomButton from "../custom-buttom/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";

describe("CartDropdown component", () => {
  let wrapper;
  let mockHistory;
  let mockToggleCartHidden; //0
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }]; //2

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      toggleCartHidden: mockToggleCartHidden, //3
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it("should render CartDropdown component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call history.push when button is clicked", () => {
    wrapper.find(`[id="counter"]`).simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it("should render 1 <CustomButton /> element", () => {
    expect(wrapper.find(CustomButton)).toHaveLength(1);
    //expect(wrapper.find("CustomButton")).toHaveLength(1); δουλευει και με "" απο οτι καταλαβαινω τα component καλυτερα να τα βαεις χωρις "" καθως με "" δεν δουλευει παντα
  });

  it("should render an equal number of CartItem components as the cartItems prop", () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it("should render EmptyMessageContainer if cartItems is empty", () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      toggleCartHidden: mockToggleCartHidden, //4
    };

    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    expect(newWrapper.exists(".empty-message")).toBe(true);
  });
});
