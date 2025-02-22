import { FiSmile } from "react-icons/fi";
import { FiMeh } from "react-icons/fi";
import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <hr />
      <p>{name}</p>
      <p className={clsx(css.text, isOnline ? css.online : css.offline)}>
        {isOnline ? (
          <FiSmile className={css.icon} />
        ) : (
          <FiMeh className={css.icon} />
        )}
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
