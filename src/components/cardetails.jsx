import React from "react";
import {
  Wrapper,
  CarItemsWrapper,
  CarItems,
  CarItemsHeader,
} from "./carDetailsStyle";

const CarDetails = (carData) => {
  return (
    <>
      <h1>Car Listings</h1>
      <Wrapper>
        <CarItemsWrapper>
          <CarItemsHeader>CAR ID</CarItemsHeader>
          <CarItemsHeader>CAR NAME</CarItemsHeader>
        </CarItemsWrapper>
        {carData.carData.Results &&
          carData.carData.Results.map((item, index) => {
            return (
              <CarItemsWrapper key={index}>
                <CarItems>{item.Make_ID}</CarItems>
                <CarItems>{item.Make_Name}</CarItems>
              </CarItemsWrapper>
            );
          })}
      </Wrapper>
    </>
  );
};

export default CarDetails;
