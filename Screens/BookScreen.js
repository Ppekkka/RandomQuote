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
import { useState } from "react";

const quotes = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
];

const BookScreen = ({ navigation }) => {
  const [ofUse, setOfUse] = useState(true);
  handleSetOfUse = () => setOfUse(!ofUse);

  lastIdx = quotes.length - 1;

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
          {quotes.map((quote, idx) => {
            return <Quote text={quote} isLast={idx == lastIdx} key={idx} />;
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
