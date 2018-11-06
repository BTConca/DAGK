import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import compose from 'recompose/compose';

import { NavLink } from 'react-router-dom';



class SideBar extends React.Component {


  returnRooms () {
    const users = this.props.users;
    if(users.length > 0){
      const a = users.map((user) => {
        return <div key={user.uid} className="room-name-wrapper"><button ><img className="resize" src={user.photoURL}></img></button><NavLink  to={`/users/${user.displayName}`} activeClassName="room-selected"><div className='room-name'>{user.displayName}</div></NavLink><a className="list-item--message">{user.isOnline ? "Online" : ""}</a></div>;
        });
        return a;
      }
    }

    render ()
    {
      return (
        <div className="container__left">
          <div className="container__left__text">
            {
              this.returnRooms()
            }
          </div>
        </div>
      );
    }
  }

  SideBar.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        uid: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        photoURL:PropTypes.string.isRendered,
        isOnline:PropTypes.bool.isRendered
      }).isRequired
    ).isRequired
  }


  const mapStateToProps = (state, props) => ({
    users: state.users
  });
  export default connect(mapStateToProps)(SideBar);
