import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";
import Statistics from "./components/statistics/Statistic";
import data from "./components/statistics/data.json";
import FriendsListRender from "./components/friend-list/FriendsListRender";
import friends from "./components/friend-list/friends.json";
import TransHistoryRender from './components/transaction-history/TransHistoryRender';
import transactions from './components/transaction-history/transactions.json';
import { GlobalStyles } from "./GlobalStyle";
import { Global } from "@emotion/react";

export default function App() {
  return (
      <div>
      <Global styles={GlobalStyles} />
      <Profile
        userName={user.username}
        tag={user.tag}
        place={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} title={'Upload stats'} />;         
      <FriendsListRender friends={friends}  />
      <TransHistoryRender transactions={transactions}/>                
    </div>
  );
}