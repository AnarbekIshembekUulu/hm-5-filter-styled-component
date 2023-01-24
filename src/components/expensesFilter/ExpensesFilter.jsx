import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  color: white;
`;

const Select = styled.select`
  width: 124px;
  height: 43px;
  padding-left: 24px;
  padding-right: 18px;
  background: #ffffff;
  border-radius: 6px;
`;

const ExpensesFilter = ({ value, onChange }) => {
  return (
    <div>
      <FilterContainer>
        <Label>Фильтр по году</Label>
        <Select value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </Select>
      </FilterContainer>
    </div>
  );
};

export default ExpensesFilter;
