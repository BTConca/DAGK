import React from 'react';
import { connect } from 'react-redux';
import { startSendMessage } from '../actions/discord';
import { MessagesList } from "../containers/MessagesList"
import { AddMessage } from "../containers/AddMessage"


export class RoomPage extends React.Component {


  onSubmit (e) {
    e.preventDefault();
    const message = e.target.message.value;

    if(!message.trim()) {
      e.target.submit.diabled = true;
      return;
    }
    this.props.startSendMessage(message, this.roomName);
    e.target.reset();
  }

  componentDidUpdate() {
    const rooms = this.props.rooms;
    var roomName = '';
    if(this.props.location)
      roomName = this.props.location.pathname.split('/').slice(-1)[0];
    if (rooms.length > 0) {
      const a = rooms.find((room) => {
        return room.name === roomName;
      });

    }
  }

  render() {
    return (
      <div className="box-layout--messages">
        <div className="room-header">
          <div className="room-header__title">{this.props.location ? this.props.location.pathname.split('/').slice(-1)[0] : "No body"}</div>
        </div>
        <form onSubmit={this.onSubmit} autoComplete="off" id="message-form">

          <input type="text" name="message" className="text-input" placeholder="Send message" autoFocus />
          <button name="submit" className="login-button">Send</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.rooms
});

  const mapDispatchToProps = (dispatch) => ({
  startSendMessage: (message, roomName) => dispatch(startSendMessage(message, roomName))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
