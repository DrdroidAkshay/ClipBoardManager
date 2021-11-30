import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";

const Splash = () => {
  componentDidMount = () => {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  };
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Splash;
