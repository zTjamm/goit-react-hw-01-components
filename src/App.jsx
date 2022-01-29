import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";
import Statistics from "./components/statistics/Statistic";
import data from "./components/statistics/data.json";
import FriendsList from "./components/friend-list/FriendsList";
import friends from "./components/friend-list/friends.json";
import TransHistory from './components/transaction-history/TransHistory';
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
      <Statistics stats={data} title={'Upload stats'} />;         
      <Statistics stats={data} />;
      <FriendsList friends={friends}  />
      <TransHistory transactions={transactions}/>                
    </div>
  );
}