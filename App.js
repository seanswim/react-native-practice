import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotifierWrapper } from "react-native-notifier";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotifierWrapper>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          <AuthNavigator />
          {/* <AppNavigator /> */}
        </NavigationContainer>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
