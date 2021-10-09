import React from "react";
import { render, screen } from "@testing-library/react";
import CarDetails from "../cardetails";

const mockResponse = {
  carData: {
    Results: [
      {
        Make_ID: 1,
        Make_Name: "Car1",
      },
      {
        Make_ID: 2,
        Make_Name: "Car2",
      },
      {
        Make_ID: 3,
        Make_Name: "Car3",
      },
    ],
  },
};

const CarItemListComponent = (mockprops) => {
  const { key } = "carkey";
  return render(<CarDetails key={key} {...mockprops}></CarDetails>);
};

describe("Unit test for CarDetails", () => {
  test("renders CarDetails", async () => {
    const { container } = CarItemListComponent(mockResponse);
    expect(container).toMatchSnapshot();
  });
});
