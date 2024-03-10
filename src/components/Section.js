import React from "react";
import styled from "styled-components";
import carDetail from "../carInfo.json";
function Section() {
  const scrollToNextSection = (e) => {
    const nextSection = e.target;
    nextSection.scrollIntoView({ behavior: "smooth" });
  };
  const itemDetails = carDetail.map((data) => (
    <Wrap key={data.id} bgimage={data.image} id={data.title}>
      <ItemText>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow
          src="/images/down-arrow.svg"
          alt="down-arrow"
          onClick={scrollToNextSection}
        />
      </Buttons>
    </Wrap>
  ));

  return <>{itemDetails}</>;
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("/images/${props.bgimage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: center;

  @media (max-width: 768px) {
    padding: 7vh;
    text-align: center;
    position: relative;
    top: 85px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  display: flex;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  border-radius: 100px;
  opacity: 0.8;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.6;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  cursor: pointer;
`;
