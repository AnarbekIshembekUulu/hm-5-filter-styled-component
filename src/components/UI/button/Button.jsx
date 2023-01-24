import styled from "styled-components";

const StyledButton = styled.button`
  width: 130px;
  height: 50px;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #69009a;
  margin-right: 50px;
  margin-bottom: 10px;
  &:hover {
    background-color: #2c0744;
  }

  &:active {
    background-color: #0df711;
  }
`;
export const Button = ({ children, onClick, style }) => {
  return (
    <StyledButton className={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;
