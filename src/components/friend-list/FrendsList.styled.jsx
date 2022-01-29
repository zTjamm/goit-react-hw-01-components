import styled from "@emotion/styled";
export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto;
  max-width: 550px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #10203060;
  align-items: center;
`;
export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
  margin: 0 30px 0 0;
  background-color: ${(props) => {
    switch (props.state) {
      case "online":
        return "#00FF00";
      case "ofline":
        return "#FF0000";
      default:
        return "000000";
    }}};
  
`;
export const Avatar = styled.img`
border: 1px solid #BBCCFF;
border-radius: 15px;
`;

export const Name = styled.p`
font-size: 45px;
text-align: center;
margin-left: 25px;
`;
