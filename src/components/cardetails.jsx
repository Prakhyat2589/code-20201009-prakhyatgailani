import React from "react";

const CarDetails = (carData) => {
  return (
    <>
      <h1>Car Details Listings</h1>

      {carData.carData.Results &&
        carData.carData.Results.map((item, index) => {
          return (
            <div key={index} className="carItem">
              <div className="carMakeId">{item.Make_ID}</div>
              <div className="carMakeName">{item.Make_Name}</div>
            </div>
          );
        })}
    </>
  );
};

export default CarDetails;
