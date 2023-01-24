import React from "react";
import Chartbar from "../chartbar/Chartbar";
import styled from "styled-components";

const ChartBar = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  height: 10rem;
`;

const Chart = ({ items }) => {
  const maximumPrice = 2000;
  const months = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "СентиябрЬ",
      currentPrice: 0,
    },
    {
      label: "Октибрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

  items.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrice += item.price;
  });
  console.log(months);
  return (
    <ChartBar>
      {months.map((el) => {
        console.log(el);
        return (
          <Chartbar
            key={el.label}
            label={el.label}
            maximumPrice={maximumPrice}
            currentPrice={el.currentPrice}
          />
        );
      })}
    </ChartBar>
  );
};

export default Chart;
