import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotifierWrapper } from "react-native-notifier";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import { useState } from "react";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const reStoreUser = async () => {
    const user = await authStorage.getUSer();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={reStoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("app loading error")}
      />
    );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotifierWrapper>
        <AuthContext.Provider value={{ user, setUser }}>
          <NavigationContainer theme={navigationTheme}>
            <OfflineNotice />
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
