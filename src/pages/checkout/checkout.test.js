import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { CheckoutPage } from "./checkout.component";

describe("CheckoutPage component", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      cartItems: [],
      total: 100,
    };

    wrapper = shallow(<CheckoutPage {...mockProps} />);
  });

  it("should render CheckoutPage component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
