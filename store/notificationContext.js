import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});
export default NotificationContext;
export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();
  const showNotificationHandler = (notification) => {
    setActiveNotification(notification);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}
