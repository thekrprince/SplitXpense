import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ExpenseList from '../UI/expense-list';
import Modal from '../UI/modal';
import classes from './dashboard-section.module.css';

function DashboardSection({ friends, activePeople }) {
  const activePeopleLength = Object.keys(activePeople).length;
  const [modalOpen, setModalOpen] = useState(false);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(null);
  const [paidbyYou, setPaidbyYou] = useState(true);
  const [expenseDate, setExpenseDate] = useState('');
  const [selectedPerson, setSelectedPerson] = useState([]);

  // Filtering the people based on input entered in nameInput
  useEffect(() => {
    let debounceTimer;

    if (friends.length > 0 && nameInput.trim() !== '') {
      debounceTimer = setTimeout(() => {
        const fp = friends.filter((friend) =>
          friend.name.toLowerCase().includes(nameInput.toLowerCase())
        );
        setFilteredPeople(fp);
      }, 400);
    }

    if (nameInput.trim() === '') {
      setFilteredPeople([]);
    }

    return () => clearTimeout(debounceTimer);
  }, [nameInput]);

  // Function to select person for splitting the bills
  const selectPersonHandler = (filtered) => {
    if (selectedPerson.length > 0) {
      const findFilteredinSelected = selectedPerson.findIndex(
        (sp) => sp.id === filtered.id
      );
      if (findFilteredinSelected === -1)
        setSelectedPerson([...selectedPerson, filtered]);
    } else {
      setSelectedPerson([...selectedPerson, filtered]);
    }
    setNameInput('');
  };

  // Function to deselect the person from splitting bills
  const deselectPersonHandler = (id) => {
    const findIdinSelected = selectedPerson.findIndex((sp) => sp.id === id);
    console.log(findIdinSelected);
    if (findIdinSelected !== -1) {
      const sp = [...selectedPerson];
      sp.splice(findIdinSelected, 1);
      setSelectedPerson(sp);
    }
  };

  // Submit expense handle
  const expenseSubmitHandler = () => {
    console.log('Expense submitted');
    const dividedShare = price / (selectedPerson.length + 1);
    // const itemDetails = selectedPerson.map((sp) => {
    //   sp.items['description'] = description;
    //   sp.items['price'] = dividedShare;
    //   return sp;
    // });
    // console.log(itemDetails);
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
          <span className={classes.lightText}>With you and: </span>
          <ul className={classes.listInput}>
            {selectedPerson.length > 0 &&
              selectedPerson.map((sp) => (
                <li className={classes.selectedList} key={sp.id}>
                  <span>{sp.name}</span>
                  <FontAwesomeIcon
                    icon={faClose}
                    className={classes.cancelIcon}
                    onClick={() => deselectPersonHandler(sp.id)}
                  />
                </li>
              ))}
            <li>
              <input
                type="text"
                placeholder="Enter a name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </li>
          </ul>
          {filteredPeople.length > 0 && (
            <ul className={classes.filtered}>
              {filteredPeople.map((filtered) => (
                <li
                  key={filtered.id}
                  onClick={() => selectPersonHandler(filtered)}
                >
                  {filtered.name}
                </li>
              ))}
            </ul>
          )}
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
          <span className={classes.lightText}>&#8377;</span>
          <input
            type="number"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="paidby" className={classes.lightText}>
            Paid by&nbsp;
          </label>
          <select name="paidby" id="paidby">
            <option value="you">you</option>
            <option value="them">them</option>
          </select>
          <label htmlFor="split" className={classes.lightText}>
            &nbsp;and split&nbsp;
          </label>
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
