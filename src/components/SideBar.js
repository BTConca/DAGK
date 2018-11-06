import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import userList from '../actions/discord';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SideBar extends React.Component {
  render ()
  {
    const { classes } = this.props;

    return (
      <div className="container__left">
        <div className="container__left__text">
          <List dense>
            {this.props.users.map(user => (
              <ListItem  key={user.uid} button>
                <Avatar alt="Remy Sharp" src={user.photoURL} />
                <ListItemText primary=""/>
                <div> >
                  <p className="room-header__title">{user.displayName}</p>
                  <p className={user.isOnline ? "list-item--message" : "list-item--message--off" }>{user.isOnline ? "Online" : "Offline"}</p>
                </div>
              </ListItem>
            ))}
          </List>
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
export default withStyles(styles)(connect(mapStateToProps)(SideBar));
