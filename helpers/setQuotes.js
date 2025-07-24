import AsyncStorage from "@react-native-async-storage/async-storage";

export const setQuotes = async (text) => {
  const title = text.substring(0, text.indexOf("\n"));
  const cutTitleText = text.substring(text.indexOf("\n") + 1);
  const author = cutTitleText.substring(0, cutTitleText.indexOf("\n"));
  const cutText = cutTitleText.substring(cutTitleText.indexOf("\n") + 2);

  const quotes = cutText.substring(0, cutText.indexOf("--") - 1);
  const quotesArr = quotes.split("\n\n*****\n\n");
  const value = JSON.stringify({
    quotesOfUse: quotesArr,
    usedQuotes: [],
    author,
  });

  try {
    await AsyncStorage.setItem(title, value);
  } catch (e) {
    console.log(e);
  }
};
