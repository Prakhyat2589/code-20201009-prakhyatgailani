import React from "react";
import { Wrapper } from "./cardetails";

const CarDetails = (carData) => {
  return (
    <>
      <h1>Car Details Listings</h1>

      {carData.carData.Results &&
        carData.carData.Results.map((item, index) => {
          return (
            <Wrapper key={index} className="carItemsWrapper">
              <div className="carMakeId">{item.Make_ID}</div>
              <div className="carMakeName">{item.Make_Name}</div>
            </Wrapper>
          );
        })}
    </>
  );
};

export default CarDetails;
