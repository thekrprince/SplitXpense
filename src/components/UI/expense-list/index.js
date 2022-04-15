import React from 'react';
import './style.css';

const ExpenseList = () => {
  const expenseList = [
    {
      name: 'Prince',
      owe: 300,
      getBack: 200,
      items: [
        {
          itemName: 'Beer',
          paidBy: true,
          splitIn: 'equal',
          price: 300,
          date: '11-Apr',
        },
        {
          itemName: 'Pizza',
          paidBy: false,
          splitIn: 'equal',
          price: 600,
          date: '10-Apr',
        },
        {
          itemName: 'Cab to Forum mall',
          paidBy: false,
          splitIn: 'equal',
          price: 260,
          date: '5-Mar',
        },
      ],
    },
  ];

  return (
    <div>
      {expenseList[0].items.map((item, index) => (
        <div className="item-lists" key={index}>
          <div className="item-name">
            <span className="date">{item.date}</span>
            <span>{item.itemName}</span>
          </div>
          <div className="item-price">
            <span>{item.price / 2}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
