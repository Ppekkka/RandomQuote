import { View, Text, StyleSheet } from "react-native";
import Menu from "../Components/Menu";
import MenuButton from "../Components/MenuButton";
import { useEffect, useState } from "react";
import { getRandomQuote } from "../helpers/getRandomQuote";
import { markQuoteAsUsed } from "../helpers/markQuoteAsUsed";
import Clipboard from "@react-native-clipboard/clipboard";

const initValue = {
  quote: "",
  book: {
    quotesOfUse: [],
    usedQuotes: [],
    author: "",
  },
  title: "",
  idx: -1,
};

const RanScreen = ({ navigation }) => {
  const [data, setData] = useState(initValue);

  const handleSetData = async () => {
    const newData = await getRandomQuote()
    if(newData) setData(newData);
  };

  const handleCopy = async () => {
    markQuoteAsUsed(data.title, data.book, data.idx);

    const stringToCopy = `${data.quote}\n\n${data.title}\n${data.book.author}`;
    console.log(stringToCopy)
    Clipboard.setString(stringToCopy);
  };

  useEffect(() => {
    handleSetData();
  }, []);

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />

      <View style={{ flex: 15 }}>
        <View style={styles.ran_menu}>
          <MenuButton title="another" func={handleSetData} />
          <MenuButton title="copy" func={handleCopy} />
        </View>

        <View style={{ flex: 20 }}>
          <Text style={styles.quote}>{data.quote}</Text>
          <Text style={styles.book_title}>{data.title}</Text>
          <Text style={styles.name}>{data.book.author}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    paddingVertical: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  ran_menu: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 9,
  },
  quote: {
    color: "white",
    fontFamily: "Optima, sans-serif",
    fontSize: 13,
    paddingBottom: 10,
  },
  book_title: {
    color: "white",
    width: "max-content",
    alignSelf: "flex-end",
    fontFamily: "Optima, sans-serif",
  },
  name: {
    color: "white",
    width: "v",
    alignSelf: "flex-end",
    fontFamily: "Optima, sans-serif",
  },
});

export default RanScreen;
