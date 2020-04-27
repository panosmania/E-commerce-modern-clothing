import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";

import { CheckoutItem } from "./checkout-item.component.jsx";

describe("CheckoutItem", () => {
  let wrapper;
  let mockclearItem;
  let mockaddItem;
  let mockremoveItem;

  beforeEach(() => {
    mockclearItem = jest.fn();
    mockaddItem = jest.fn();
    mockremoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: "www.testImage.com",
        price: 10,
        name: "hats",
        quantity: 2,
      },
      clearItem: mockclearItem,
      addItem: mockaddItem,
      removeItem: mockremoveItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it("should render CheckoutItem component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call removeItem when left arrow is clicked ", () => {
    wrapper.find(`[id="xc"]`).simulate("click");
    expect(mockremoveItem).toHaveBeenCalled();
  });

  // ιδιο test με το πανω απλα αντι να γραφτει το Id [id="xc"] δουλευει κ ετσι `#xc`
  it("should call removeItem when left arrow is clicked ", () => {
    wrapper.find(`#xc`).simulate("click");
    expect(mockremoveItem).toHaveBeenCalled();
  });

  //το ιδιο με πανω αλλα classname indicator , με .childAt(0) δεν δουλευει θα δουλευε αμα χρησιμοποιουσα styled component το καλυτερο ειναι να δουλευεις με id ΑΜΑ υπαρχουν ιδια classname
  it("should call removeItem when left arrow is clicked ", () => {
    wrapper.find(".arrow").at(0).simulate("click");
    expect(mockremoveItem).toHaveBeenCalled();
  });

  it("should call addItem when right arrow is clicked ", () => {
    wrapper.find(".arrow").at(1).simulate("click");
    expect(mockaddItem).toHaveBeenCalled();
  });
});
