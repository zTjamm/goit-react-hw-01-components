import PropTypes from 'prop-types';
import {Profile, Description, Avatar, Name, Tag, Stats, Item} from './Profile.styled';
export default function ProfRender({userName, tag, place, avatar, stats}) {
    
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
        <span>{stats.followers}</span>
      </Item>
      <Item>
        <span>Views</span>
        <span>{stats.views}</span>
      </Item>
      <Item>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </Item>
    </Stats>
  </Profile>
}
ProfRender.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
};