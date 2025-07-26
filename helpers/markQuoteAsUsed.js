import AsyncStorage from "@react-native-async-storage/async-storage";

export const markQuoteAsUsed = async (title, book, idx) => {
  if (book.quotesOfUse.length == 1) {
    try {
      await AsyncStorage.removeItem(title);
    } catch (e) {
      console.log("markQuoteAsUsed", e);
    }
  } else {
    quote = book.quotesOfUse.splice(idx, 1);
    book.usedQuotes.push(quote);

    try {
      await AsyncStorage.setItem(title, JSON.stringify(book));
    } catch (e) {
      console.log("setQuotes", e);
    }
  }
};
