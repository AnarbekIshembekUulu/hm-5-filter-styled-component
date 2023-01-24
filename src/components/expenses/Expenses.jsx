import React, { useState } from "react";
import ExpenseItem from "../expensitem/ExpenseItem";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import Chart from "../chart/Chart";
import styled from "styled-components";

const Ul = styled.ul`
  padding: 20px;
  background: #1f1f1f;
  width: 61.7rem;
  margin: auto;
  border-radius: 20px;
`;


const Expenses = ({ expenses }) => {
  const [selectYear, setSelectYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectYear(event.target.value);
  };

  const FiltredYear = expenses.filter((item) => {
    const stringifiYear = new Date(item.date).getFullYear().toString();
    return selectYear === stringifiYear;
  });
  console.log(FiltredYear);

  return (
    <Ul>
      <ExpensesFilter value={selectYear} onChange={yearChangeHandler} />
      <Chart items={FiltredYear} />
      {FiltredYear.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          />
        );
      })}
    </Ul>
  );
};

export default Expenses;
