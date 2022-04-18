import React, { useState } from 'react';
import ExpenseList from '../UI/expense-list';
import Modal from '../UI/modal';
import classes from './dashboard-section.module.css';

function DashboardSection({ activePeople }) {
  const activePeopleLength = Object.keys(activePeople).length;
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(null);
  const [paidbyYou, setPaidbyYou] = useState(true);
  const [expenseDate, setExpenseDate] = useState('');

  const expenseSubmitHandler = () => {
    console.log('Expense submitted');
  };

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
    <>
      <div className={classes.dbSection}>
        <div className={classes.titleBtnSection}>
          <h2>{activePeopleLength > 0 ? activePeople.name : 'Dashboard'}</h2>
          <div className={classes.buttons}>
            <button onClick={() => setModalOpen(true)}>Add an expense</button>
            <button>Settle up</button>
          </div>
        </div>
        {activePeopleLength > 0 ? (
          <ExpenseList activePeople={activePeople} />
        ) : (
          dashboardExpense()
        )}
      </div>
      <Modal
        title="Add an expense"
        open={modalOpen}
        setOpen={setModalOpen}
        titleClass="modal-title expense"
      >
        <div className={classes.expenseModalInput}>
          <span>With you and: </span>
          <input
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.expenseModalInput}>
          <input
            type="text"
            placeholder="Enter a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={classes.expenseModalInput}>
          <span>&#8377;</span>
          <input
            type="number"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="paidby">Paid by&nbsp;</label>
          <select name="paidby" id="paidby">
            <option value="you">you</option>
            <option value="them">them</option>
          </select>
          <label htmlFor="split">and split&nbsp;</label>
          <select name="split" id="split">
            <option value="equally">Equally</option>
            <option value="you-owe">You owe the full amount</option>
            <option value="you-owe">They owe the full amount</option>
          </select>
        </div>
        <div className={classes.modalBtns}>
          <button onClick={expenseSubmitHandler}>Save</button>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </>
  );
}

export default DashboardSection;
