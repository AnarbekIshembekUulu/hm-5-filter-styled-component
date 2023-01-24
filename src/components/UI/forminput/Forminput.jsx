import React from "react";
import styled from "styled-components";

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  text-align: start;
`;

const Label = styled.label`
  font-weight: bold;
  color: rgb(230, 230, 229);
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Forminput = ({ labelName, placeholder, inputType, id, ...rest }) => {
  console.log(rest);
  return (
    <InputsContainer>
      <Label htmlFor={id}>{labelName}</Label>
      <Input
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      />
    </InputsContainer>
  );
};

export default Forminput;
