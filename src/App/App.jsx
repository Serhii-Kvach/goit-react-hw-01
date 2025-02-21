import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import friends from "../friends.json";
import userData from "../userData.json";
import "../App/App.module.css";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
    </>
  );
}
