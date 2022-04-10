import React from 'react';
import classes from './dashboard-section.module.css';

function DashboardSection() {
  return (
    <div className={classes.dbSection}>
      <div className={classes.titleBtnSection}>
        <h2>Dashboard</h2>
        <div className={classes.buttons}>
          <button>Add an expense</button>
          <button>Settle up</button>
        </div>
      </div>
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
    </div>
  );
}

export default DashboardSection;
