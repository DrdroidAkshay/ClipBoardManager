import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = (value) => {
  AsyncStorage.setItem(
    "data",
    typeof value === "string" ? value : JSON.stringify(value)
  );
};

export const fetchData = () => {
  AsyncStorage.getItem("data");
};
