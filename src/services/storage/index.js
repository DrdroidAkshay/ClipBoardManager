import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (value) => {
  await AsyncStorage.setItem(
    "data",
    typeof value === "string" ? value : JSON.stringify(value)
  );
};

export const fetchData = async () => {
  const value = await AsyncStorage.getItem("data");
  console.log(value);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};
