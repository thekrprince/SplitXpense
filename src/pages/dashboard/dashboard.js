import React, { useEffect, useState } from 'react';
import DashboardSection from '../../components/dashboard-section/dashboard-section';
import LeftSidebar from '../../components/left-sidebar/left-sidebar';
import classes from './dashboard.module.css';

const Dashboard = () => {
  const [activePeople, setActivePeople] = useState({});
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetching data in starting
    let retrievePeople = localStorage.getItem('friends');
    if (retrievePeople === null) {
      localStorage.setItem('friends', JSON.stringify([]));
      retrievePeople = localStorage.getItem('friends');
    }
    const people = JSON.parse(retrievePeople);
    setFriends(people);
  }, []);

  return (
    <div className={classes.dashboard}>
      <LeftSidebar
        friends={friends}
        setFriends={setFriends}
        activePeople={activePeople}
        setActivePeople={setActivePeople}
      />
      <DashboardSection activePeople={activePeople} friends={friends} />
    </div>
  );
};

export default Dashboard;
