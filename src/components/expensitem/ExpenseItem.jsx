import styled from "styled-components";

const ExpensesItemContainer = styled.div`
  border-radius: 10px;
  margin-bottom: 20px;
  background: #4b4b4b;
  margin: auto;
  width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const ContainerDateAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerDate = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 10px;
  color: aliceblue;
  padding: 10px 15px;
  margin-left: 10px;
  margin-right: 30px;
`;
const Price = styled.p`
  color: #ffffff;
  padding: 15px 1px;
  gap: 10px;
  width: 90px;
  height: 30px;
  background: #641e85;
  border: 0.5px solid #ffffff;
  border-radius: 10px;
  margin-right: 10px;
`;
const NameTitle=styled.p`
color: antiquewhite;
`

const ExpenseItem = ({ date, title, price }) => {
  return (
    <ExpensesItemContainer>
      <ContainerDateAndTitle>
        <ContainerDate>
          <div>
            {new Date(date).toLocaleString("ru-ru", { month: "long" })}
          </div>
          <div>{new Date(date).getFullYear().toString()}</div>
          <div>{new Date(date).getDate()}</div>
        </ContainerDate>

        <NameTitle>{title}</NameTitle>
      </ContainerDateAndTitle>

      <Price>{price} $</Price>
    </ExpensesItemContainer>
  );
};

export default ExpenseItem;
