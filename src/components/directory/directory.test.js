import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { Directory } from "./directory.component";

describe("Directory component", () => {
  const wrapper = shallow(<Directory sections={[]} />);
  it("should render Directory component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
