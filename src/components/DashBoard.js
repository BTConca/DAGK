import React from 'react';
import RoomPage from './RoomPage.js';
import '../styles/base/struct.css';

const DashBoard = () => (
  <div id="container">
  <aside id="sidebar">Users</aside>
  <section id="main">
    <div>
      <RoomPage />
    </div>
  </section>
</div>
);

export default DashBoard;
