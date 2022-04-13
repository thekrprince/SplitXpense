import React, { useState } from 'react';
import DashboardSection from '../../components/dashboard-section/dashboard-section';
import LeftSidebar from '../../components/left-sidebar/left-sidebar';
import classes from './dashboard.module.css';

const Dashboard = () => {
  const [activePeople, setActivePeople] = useState({});

  return (
    <div className={classes.dashboard}>
      <LeftSidebar
        activePeople={activePeople}
        setActivePeople={setActivePeople}
      />
      <DashboardSection activePeople={activePeople} />
    </div>
  );
};

export default Dashboard;
