import React from "react";
import styled from "styled-components";

const ChartBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartBarDiv = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 23px;
`;

const ChartBarColumn = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const Label = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;


const Chartbar = ({ maximumPrice, currentPrice, label }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <ChartBarContainer>
      <ChartBarDiv>
        <ChartBarColumn
          className="char-bar__column "
          style={{ height: `${fillHeight}%` }}
        ></ChartBarColumn>
      </ChartBarDiv>
      <Label>{label}</Label>
    </ChartBarContainer>
  );
};

export default Chartbar;