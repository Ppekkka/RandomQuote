import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const MenuButton = ({ title, func = () => {} }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.customBtnBG} onPress={func}>
        <Text style={styles.customBtnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  customBtnBG: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 2,
  },

  customBtnText: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    fontFamily: "Optima, sans-serif",
  },
});

export default MenuButton;
