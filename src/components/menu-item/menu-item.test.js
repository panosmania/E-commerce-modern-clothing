import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { MenuItem } from "./menu-item.component";

describe("MenuItem component", () => {
  let wrapper;
  let mockHistory;
  let mockMatch;
  const linkUrl = "/hats";
  const size = "large";
  const imageUrl = "testimage";

  beforeEach(() => {
    mockMatch = {
      path: "/shop",
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      title: "hats",
      imageUrl: imageUrl,
      size: size,
      linkUrl: linkUrl,
      history: mockHistory,
      match: mockMatch,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it("should render MenuItem component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call history.push with the right string when div with classname menu-item clicked", () => {
    wrapper.find(".menu-item").simulate("click");
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it("should pass size to MenuItemContainer as the prop size", () => {
    expect(wrapper.find(".background-image").prop("style")).toHaveProperty(
      "backgroundImage",
      `url(${imageUrl})`
    );
  });
});
