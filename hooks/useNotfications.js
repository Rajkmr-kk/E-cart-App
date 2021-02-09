import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permission from "expo-permissions";
import expoPushTokensApi from "../api/expoPushToken";

export default useNotifications = (notificationListner) => {
  useEffect(() => {
    registerForPushNotifications();
    if (Notifications) {
      const notification = Notifications.addNotificationReceivedListener(
        notificationListner
      );
    }

    // return () => notification.remove();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permissions = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!permissions.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      // console.log(token);
      expoPushTokensApi.register(token);
    } catch (err) {
      console.log("Something Went Wrong", err);
    }
  };
};
