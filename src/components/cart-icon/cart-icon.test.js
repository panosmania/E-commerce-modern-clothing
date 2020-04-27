import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { CartIcon } from "./cart-icon.component";

describe("CartIcon component", () => {
  let wrapper;
  let mockToggleCartHidden;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("should render CartIcon component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call toggleCartHidden when icon is clicked", () => {
    wrapper.find(".cart-icon").simulate("click");
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it("should render the itemCount as the text", () => {
    const itemCount = parseInt(wrapper.find(".item-count").text());
    expect(itemCount).toBe(0);
  });
});
