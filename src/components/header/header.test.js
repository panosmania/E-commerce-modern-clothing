import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { Header } from "./header.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

describe("Header component", () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: "123",
      },
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("if currentUser is present", () => {
    it("should render sign out link", () => {
      expect(wrapper.find("div").at(2).text()).toBe("SIGN OUT");
    });

    it("should call signOutStart method when link is clicked", () => {
      wrapper.find(".option").at(2).simulate("click");

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe("if currentUser is null", () => {
    it("should render sign in link", () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find(".option").at(2).text()).toBe("SIGN IN");
    });
  });

  describe("if hidden is true", () => {
    it("should not render CartDropdown", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe("if currentUser is null", () => {
    it("should render CartDropdown", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
