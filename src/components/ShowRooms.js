import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';



class ShowRooms extends React.Component {

  render() {
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

const mapStateToProps = (state) => ({
  rooms: state.rooms,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  startClearUnread: (roomName) => dispatch(startClearUnread(roomName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowRooms);
