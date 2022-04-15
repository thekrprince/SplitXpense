import React from 'react';
import ExpenseList from '../UI/expense-list';
import classes from './dashboard-section.module.css';

function DashboardSection({ activePeople }) {
  const activePeopleLength = Object.keys(activePeople).length;

  const dashboardExpense = () => {
    return (
      <>
        <div className={classes.balance}>
          <div className={classes.totalbalance}>
            <span>total balance</span>
            <br />
            <span>+859</span>
          </div>
          <div className={classes.owe}>
            <span>you owe</span>
            <br />
            <span>334</span>
          </div>
          <div className={classes.owed}>
            <span>you are owed</span>
            <br />
            <span>1193</span>
          </div>
        </div>
        <div className={classes.expenseData}>
          <div className={classes.oweData}>
            <h4>YOU OWE</h4>
          </div>
          <div className={classes.getBackData}>
            <h4>YOU GET BACK</h4>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={classes.dbSection}>
      <div className={classes.titleBtnSection}>
        <h2>{activePeopleLength > 0 ? activePeople.name : 'Dashboard'}</h2>
        <div className={classes.buttons}>
          <button>Add an expense</button>
          <button>Settle up</button>
        </div>
      </div>
      {activePeopleLength > 0 ? (
        <ExpenseList activePeople={activePeople} />
      ) : (
        dashboardExpense()
      )}
    </div>
  );
}

export default DashboardSection;
