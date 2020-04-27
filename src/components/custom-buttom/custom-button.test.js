import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { CustomButton } from "./custom-buttom.component";

describe("CustomButton component", () => {
  const wrapper = shallow(<CustomButton />);
  it("should render CustomButton component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
