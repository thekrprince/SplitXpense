import React from 'react';

const Expense = React.createContext({
  theme: '',
  friends: [],
});

export const ExpenseProvider = (props) => {
  const contextValue = {};

  return (
    <Expense.Provider value={contextValue}>{props.children}</Expense.Provider>
  );
};

export default Expense;
