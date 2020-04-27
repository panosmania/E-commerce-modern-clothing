import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { Homepage } from "./homepage.component";

describe("Homepage component", () => {
  const wrapper = shallow(<Homepage />);

  it("should render Homepage component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
