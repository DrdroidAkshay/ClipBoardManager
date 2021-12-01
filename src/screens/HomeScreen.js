import React, { useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, Button } from "react-native";
import * as Clipboard from "expo-clipboard";
import { clipboardListener } from "../services/clipboard";
import { fetchData, saveData } from "../services/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [copiedTextt, setCopiedTextt] = useState([]);

  const fetchCopiedText2 = () => {
    fetchData().then((a) => setCopiedTextt(a));
  };

  const saveCopiedText = async () => {
    try {
      const text = await Clipboard.getStringAsync();
      console.log(typeof copiedTextt);
      const newData =
        typeof copiedTextt === "string"
          ? [copiedTextt, text].join(", ")
          : (copiedTextt || []).concat(text).join(", ");

      saveData(newData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Click here to get clipboard data"
        onPress={fetchCopiedText2}
      />
      <Button
        title="Click here to save clipboard data"
        onPress={saveCopiedText}
      />

      <Button title="Clear Storage" onPress={() => saveData("")} />
      <Text>{copiedTextt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
