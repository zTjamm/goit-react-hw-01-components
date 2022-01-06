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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  margin: 0 30px 0 0;
  background-color: ${(props) => {
    switch (props.state) {
      case "online":
        return "#00FF00";
      case "ofline":
        return "#FF00FF";
      default:
        return "000000";
    }}};
  
`;
export const Avatar = styled.img`
width: 80px;
border: 1px solid #BBCCFF;
border-radius: 25px;
padding: 10px`;
export const Name = styled.p`
margin: 0 0 0 50px;
font-size: 45px;
margin: 0 30px 0 auto`;
