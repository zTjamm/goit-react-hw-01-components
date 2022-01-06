import ProfRender from "./components/profile/ProfileRender";
import user from "./components/profile/user.json";
import StatisticRender from "./components/statistics/StatisticRender";
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
      <ProfRender
        userName={user.username}
        tag={user.tag}
        place={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticRender data = {data} />         
      <FriendsListRender friends={friends}  />
      <TransHistoryRender transactions={transactions}/>                
    </div>
  );
}