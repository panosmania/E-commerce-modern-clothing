import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { collectionsOverview } from "./collections-overview.component";

describe("collectionsOverview component", () => {
  const wrapper = shallow(<collectionsOverview collections={[]} />);
  it("should render CollectionsOverview component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
