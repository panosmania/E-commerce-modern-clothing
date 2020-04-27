import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { CollectionItem } from "./collection-item.component";

describe("CollectionItem", () => {
  let wrapper;
  let mockaddItem;
  const imageUrl = "www.testImage.com";
  const mockName = "black hat";
  const mockPrice = 10;

  beforeEach(() => {
    mockaddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: "www.testImage.com",
        price: mockPrice,
        name: mockName,
      },
      addItem: mockaddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render CollectionItem component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call addItem when AddButton clicked  ", () => {
    wrapper.find(`[id='test']`).simulate("click");
    expect(mockaddItem).toHaveBeenCalled();
  });

  //κατι κανω λαθος εδω και δεν μου βγαζει αυτο που θελω
  //expect(wrapper.find(".image").prop("style")).toBe(imageUrl); λαθος δεν μπορει να γινει ετσι
  //με τον κατω τροπο δουλευει οπως πρεπει
  it("should render imageUrl as a prop on BackgroundImage", () => {
    expect(wrapper.find(".image").prop("style")).toHaveProperty(
      "backgroundImage",
      `url(${imageUrl})`
    );
  });

  it("should call addItem when AddButton clicked  ", () => {
    wrapper.find(`[id='test']`).simulate("click");
    expect(mockaddItem).toHaveBeenCalled();
  });

  it("should render name prop in NameContainer", () => {
    expect(wrapper.find(".name").text()).toBe(mockName);
  });

  it("should render price prop in PriceContainer", () => {
    const price = parseInt(wrapper.find(".price").text());
    expect(price).toBe(mockPrice);
  });
});
