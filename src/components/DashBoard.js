import React from 'react';
import RoomPage from './RoomPage.js';
import '../styles/base/struct.css';
import SideBar from './SideBar.js';

const DashBoard = () => (
  <div id="container">
  <SideBar />
  <section id="main">
    <div>
      <RoomPage />
    </div>
  </section>
</div>
);

export default DashBoard;
