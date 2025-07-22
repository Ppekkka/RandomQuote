import { StyleSheet, View } from "react-native";
import MenuButton from "./MenuButton";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.menu}>
      <MenuButton
        title="Ran"
        func={() => navigation.navigate("Ran", { name: "Ran" })}
      />
      <MenuButton
        title="Add"
        func={() => navigation.navigate("Add", { name: "Add" })}
      />
      <MenuButton
        title="Quo"
        func={() => navigation.navigate("Quo", { name: "Quo" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 9,
  },
});

export default Menu;
