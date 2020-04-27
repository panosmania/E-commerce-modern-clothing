import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { ShopPage } from "./shop.component";

describe("ShopPage", () => {
  let wrapper;
  let mockFetchCollectionsStart;
  let mockMatch;
  const isCollectionFetching = true;
  const isCollectionsLoaded = true;

  beforeEach(() => {
    mockMatch = {
      path: "",
    };
    mockFetchCollectionsStart = jest.fn();

    const mockProps = {
      isCollectionFetching: isCollectionFetching,
      isCollectionsLoaded: isCollectionsLoaded,
      match: mockMatch,
      CollectionsStart: mockFetchCollectionsStart,
    };

    wrapper = shallow(<ShopPage {...mockProps} />);
  });

  it("should render ShopPage component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render ShopPage component at least >0", () => {
    expect(mockFetchCollectionsStart).not.toHaveBeenCalled();
  });
});
