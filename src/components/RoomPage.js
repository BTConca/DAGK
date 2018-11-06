import React from 'react';
import { connect } from 'react-redux';


// const getMessages = () => {

// }

// const onSubmit = (e) => {
//   e.preventDefault();

// }

export class RoomPage extends React.Component {

  render() {
    return (
      <div className="box-layout--messages">
        <div className="room-header">
          <div className="room-header__title">xxxxx</div>
        </div>
        <form  autoComplete="off" id="message-form">
          <input type="text" name="message" className="text-input" placeholder="Send message" autoFocus />
          <button name="submit" className="login-button">Send</button>
        </form>

      </div>
    );
  }
}


export default (RoomPage);
