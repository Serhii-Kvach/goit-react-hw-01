import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";
import friends from "../../friends.json";
import userData from "../../userData.json";
import "./App.module.css";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
