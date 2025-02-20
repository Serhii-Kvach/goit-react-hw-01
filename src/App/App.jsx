import Profile from "../Profile/Profile";
import userData from "../userData.json";
import "../App/App.module.css";

export default function App() {
  return (
    <>
      <Profile user={userData} />
    </>
  );
}
