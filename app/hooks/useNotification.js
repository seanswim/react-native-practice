import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotificationsAsync();
    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });
      expoPushTokensApi.register(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token.data;
  }
};

export default useNotifications;
