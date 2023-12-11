import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotifierWrapper } from "react-native-notifier";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  // return <ViewImageScreen />;
  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotifierWrapper>
        <MessagesScreen />
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
