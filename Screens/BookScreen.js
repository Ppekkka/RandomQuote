import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Switch,
} from "react-native";
import Quote from "../Components/Quote";
import { useEffect, useState } from "react";
import { getBook } from "../helpers/getBook";

const BookScreen = ({ route, navigation }) => {
  const { title } = route.params;

  const [ofUse, setOfUse] = useState(true);
  const [book, setBook] = useState([]);

  const handleSetOfUse = () => setOfUse(!ofUse);

  useEffect(() => {
    if (title && !book?.length) {
      const handleSetBook = async () => {
        setBook(await getBook(title));
      };
      handleSetBook();
    }
  }, []);

  let quotes = ofUse ? book?.quotesOfUse : book?.usedQuotes;

  return (
    <View style={styles.container}>
      <View style={styles.book_menu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Quo", { name: "Quo" })}
        >
          <Text style={{ color: "white", fontSize: 30 }}>{"<-"}</Text>
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 25 }}>Of use</Text>
        <Switch
          trackColor={{ false: "#ff8b8bff", true: "#91d1ffff" }}
          onChange={handleSetOfUse}
          value={ofUse}
        />
      </View>

      <SafeAreaView style={{ flex: 15 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {quotes &&
            quotes.map((quote, idx) => {
              return (
                <Quote
                  text={quote}
                  isLast={idx == quotes.length - 1}
                  key={idx}
                />
              );
            })}
        </ScrollView>
      </SafeAreaView>
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
  book_menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 9,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default BookScreen;
