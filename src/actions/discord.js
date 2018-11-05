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
      const value = snapshot.val();
      const id = member.id;
      if (value === null) {
        return showJoinError("Can't not start Discord!");
      }
      else if (value.user) {
        history.push(`users/${snapshot.name}`);
      }
      else {
        dispatch(startListening(member.name));
        const person = {
          name: member.name,
          id: member.id,
          unread: member.unread,
          lastRead: 0
        };
        let people = [];
        for (var key in value.) {
          people.push({
            id: value.people[key].id,
            name: value.people[key].name,
            unread: value.people[key].unread,
            lastRead: value.people[key].lastRead
          });
        }
        for (var key in value.messages) {
          messages.push({
            ...value.messages[key]
          });
        }
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
