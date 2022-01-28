import PropTypes from 'prop-types';
import {Profile, Description, Avatar, Name, Tag, Stats, Item} from './Profile.styled';
export default function ProfRender({userName, tag, place, avatar, stats:{followers, views, likes}}) {
    
    return <Profile>
    <Description>
      
          <Avatar
        src={avatar}
        alt="User avatar"
        className="avatar"
        
      />
      
      <Name>{userName}</Name>
      <Tag>@{tag}</Tag>
      <Tag>{place}</Tag>
    </Description>
  
    <Stats>
      <Item>
        <span>Followers</span>
        <span>{followers}</span>
      </Item>
      <Item>
        <span>Views</span>
        <span>{views}</span>
      </Item>
      <Item>
        <span>Likes</span>
        <span>{likes}</span>
      </Item>
    </Stats>
  </Profile>
}
ProfRender.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    stats: 
      PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
};