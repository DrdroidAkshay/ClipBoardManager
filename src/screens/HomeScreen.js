import React, { useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, Button } from "react-native";
import * as Clipboard from "expo-clipboard";
import { clipboardListener } from "../services/clipboard";
import { fetchData, saveData } from "../services/storage";

const HomeScreen = () => {
  const [copiedText, setCopiedText] = useState([]);
  const [copiedTextt, setCopiedTextt] = useState([]);

  //   useEffect(() => {
  //     console.log("hlw");
  //     const cpListener = Clipboard.addClipboardListener(clipboardListener);
  //     return () => {
  //       Clipboard.removeClipboardListener(cpListener);
  //       console.log("hi");
  //     };
  //   }, []);

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText([...copiedText, text]);
  };

  const fetchCopiedText2 = async () => {
    setCopiedTextt(fetchData());
  };

  const saveCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    console.log("hi");
    console.log(text);
    console.log("hi");
    saveData([...copiedTextt, text]);
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Click here to get clipboard data"
        onPress={fetchCopiedText}
      />
      <Button
        title="Click here to get clipboard data"
        onPress={fetchCopiedText2}
      />
      <Button
        title="Click here to save clipboard data"
        onPress={saveCopiedText}
      />
      <Text>{copiedText}</Text>
      <Text>{copiedTextt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
