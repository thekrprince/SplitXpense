import React from 'react';
import DashboardSection from '../../components/dashboard-section/dashboard-section';
import LeftSidebar from '../../components/left-sidebar/left-sidebar';
import classes from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <LeftSidebar />
      <DashboardSection />
    </div>
  );
};

export default Dashboard;
