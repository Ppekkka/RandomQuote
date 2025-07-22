import { View, Text, StyleSheet } from "react-native";
import Menu from "../Components/Menu";
import MenuButton from "../Components/MenuButton";

const RanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />

      <View style={styles.ran_container}>
        <View style={styles.ran_menu}>
          <MenuButton title="generate" />
          <MenuButton title="copy" />
        </View>

        <View style={styles.quote_container}>
          <Text style={styles.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <Text style={styles.book_title}>"Hhiuhiahd" ("ПШПпориорир")</Text>
          <Text style={styles.name}>by IUhuih IUiuiu</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    paddingVertical: 30,
    paddingHorizontal: 20,
    height: "100%",
  },
  ran_container: {
    flex: 15,
  },
  ran_menu: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 9,
  },
  quote_container: {
    flex: 20,
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
