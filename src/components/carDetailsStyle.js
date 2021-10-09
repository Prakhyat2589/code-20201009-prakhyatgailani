import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 0 auto 50px auto;
`;

const CarItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #000;
  border-width: 1px 1px 0 1px;
  margin: 0 auto;
  padding: 10px;

  &:nth-child(even) {
    background: #a9dce3;
  }
  &:nth-child(odd) {
    background: #7689de;
  }
  &:first-child {
    background: purple;
  }
  &:last-child {
    border-width: 1px;
  }
`;

const CarItems = styled.div`
  flex-basis: 150px;
`;

const CarItemsHeader = styled(CarItems)`
  font-weight: bold;
  color: #fff;
`;

export { Wrapper, CarItemsWrapper, CarItems, CarItemsHeader };
