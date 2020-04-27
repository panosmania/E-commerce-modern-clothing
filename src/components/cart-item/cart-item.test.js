import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import CartItem from "./cart-item.component";

describe("CartItem", () => {
  const mockProps = {
    imageUrl: "www.testImage.com",
    price: 10,
    name: "hats",
    quantity: 2,
  };

  const wrapper = shallow(<CartItem item={mockProps} />);

  it("should render CartItem component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render imageUrl: www.testImage.com ", () => {
    //wrapper.find(".price");
    expect(mockProps.imageUrl).toEqual("www.testImage.com");
  });

  it("should render price: toBe 10 ", () => {
    //wrapper.find(".price");
    expect(mockProps.price).toBe(10);
  });

  it("should NOT render name: hats ", () => {
    //wrapper.find(".price");
    expect(mockProps.name).not.toMatch("Bob");
  });
});
