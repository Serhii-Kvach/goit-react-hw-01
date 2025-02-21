import { BsFillCircleFill } from "react-icons/bs";
import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <hr />
      <p>{name}</p>
      <p className={clsx(css.text, isOnline ? css.online : css.offline)}>
        <BsFillCircleFill />
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
