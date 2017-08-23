import { createContainer } from 'meteor/react-meteor-data';
import Home from '../pages/home.jsx';

export default MainContainer = createContainer(props => {
  const currentUser = Meteor.user();
  let logout = props.logout;
  let location = props.location;

  return {
    currentUser,
    logout,
    location

  };
}, Home);
