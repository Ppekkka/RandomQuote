import AsyncStorage from "@react-native-async-storage/async-storage";

export const getBooks = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log('getBooks', e);
  }

  return keys;
};
