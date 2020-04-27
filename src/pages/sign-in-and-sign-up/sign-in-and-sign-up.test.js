import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { SignInAndSignUpPage } from "./sign-in-and-sign-up.component";

describe("SignInAndSignUpPage component", () => {
  it("should render MenuItem component", () => {
    const wrapper = shallow(<SignInAndSignUpPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
