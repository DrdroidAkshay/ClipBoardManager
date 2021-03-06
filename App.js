import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Splash from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

const navigator = createStackNavigator(
  {
    ClipboardManager: Splash,
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defautlNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigator);
