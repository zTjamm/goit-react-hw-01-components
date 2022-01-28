import PropTypes from "prop-types";
import OnLineFriends from "./OnLineFriends";
import {FriendList} from './FrendsList.styled'

function FriendsList({ friends }) {
   return( <FriendList>
   {friends.map(({id,avatar,name,isOnline}) => (
         <OnLineFriends
         key={id}
         avatar={avatar}
         name={name}
         isOnline={isOnline}
       />
       
     ))}
   </FriendList>)
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
  }),
  ),
};
export default FriendsList;
