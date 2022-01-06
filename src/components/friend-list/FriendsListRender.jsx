import PropTypes from "prop-types";
import FriendsList from "./FriendsList";
import {FriendList} from './FrendsList.styled'

function FriendsListRender({ friends }) {
   return( <FriendList>
   {friends.map(({id,avatar,name,isOnline}) => (
         <FriendsList
         key={id}
         avatar={avatar}
         name={name}
         isOnline={isOnline}
       />
       
     ))}
   </FriendList>)
}
FriendsListRender.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
  }),
  ),
};
export default FriendsListRender;
