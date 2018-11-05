import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'

const SideBar = ({ users }) => (
  <aside id="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.uid}>{user.displayName}</li>
      ))}
    </ul>
  </aside>
)

SideBar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

const mapStateToProps = (state, props) => ({
  users: state.users
});

export default connect(mapStateToProps)(SideBar);
