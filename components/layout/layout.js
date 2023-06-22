import MainNavigation from "./main-navigation";
import Notification from "../Notification";
import NotificationContext from "../../store/notificationContext";
import { useContext } from "react";
export default function Layout(props) {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        ></Notification>
      )}
    </>
  );
}
