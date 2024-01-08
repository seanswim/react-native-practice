import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotifierWrapper } from "react-native-notifier";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  const netInfo = useNetInfo();

  AsyncStorage.setItem();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotifierWrapper>
        <NavigationContainer theme={navigationTheme}>
          {/* <AuthNavigator /> */}
          <AppNavigator />
        </NavigationContainer>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
