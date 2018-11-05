import memberbase, { firebase } from '../firebase/firebase';
import { history } from '../routers/AppRouter';
import moment from 'moment';
import * as path from 'path';

export const createDiscord = ({ id, name }) => ({
  type: 'CREATE_DISCORD',
  room: {
    id,
    name
  }
});


export const startDiscord = (showError) => {
  return (dispatch, getState) => {
    const state = getState();
    return memberbase.ref(`users`).once('value', (snapshot) => {
      const users = [];
      snapshot.forEach((childSnapshot) => {
        users.push({
          ...childSnapshot.val()
        });
      });

      const value = snapshot.val();
      if (value === null) {
        return showJoinError("Can't not start Discord!");
      }
      else {
        dispatch(startListening(member.name));
        const person = {
          name: member.name,
          id: member.id,
          unread: member.unread,
          lastRead: 0
        };
        return memberbase.ref(`rooms/${member.name}/people/${person.id}`).set(person).then((ref) => {
          memberbase.ref(`users/${person.id}/rooms/${member.name}`).set({ name: member.name });

          dispatch(createRoom({
            people: [...people, person],
            name: member.name,
            messages
          }));
          const perName = person.name;

          dispatch(startSendMessage(`${perName} joined`, member.name, true));

          history.push(`room/${member.name}`);
        });
      }
    });
  }
};
