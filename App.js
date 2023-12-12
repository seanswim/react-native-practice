import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotifierWrapper } from "react-native-notifier";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotifierWrapper>
        {/* <MessagesScreen /> */}
        {/* <AccountScreen /> */}
        <ListingsScreen />
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
