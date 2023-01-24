import  ExpenseForm  from "../expenseForm/ExpenseForm";
import { useState } from "react";
import  Button  from "../UI/button/Button";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  padding: 10px;
  background: #ad9be9;
  width: 62.5rem;
  margin: auto;
  margin-bottom: 50px;
`;

const NewExpense = ({ onNewExpenseadd }) => {
  const [showForm, setShowForm] = useState(false);

  const showexpenseForm = () => {
    setShowForm((prevState) => !prevState
    );
  };

  return (
    <Container>
      {showForm ? (
        <ExpenseForm
          onShoForm={showexpenseForm}
          onNewExpenseadd={onNewExpenseadd}
        />
      ) : (
        <Button style={"btnAdd"} onClick={showexpenseForm}>
          Добавить новый расход
        </Button>
      )}
    </Container>
  );
};

export default NewExpense;
