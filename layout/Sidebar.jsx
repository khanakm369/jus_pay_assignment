import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideBar.css';

const Sidebar = () => {
  return (
    <div className="sideBar-layout">
      <h3>DashBoard</h3>
      <nav>
        <ul>
          <li className='pages'><NavLink to="/FinanceAnalysis">Finance Analysis</NavLink></li>
          <li className='pages'><NavLink to="/Orders">Orders</NavLink></li>
          <li className='pages'><NavLink to="/Profiles">Profiles</NavLink></li>
          <li className='pages'><NavLink to="/Products">Products</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
