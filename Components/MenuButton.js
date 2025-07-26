import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const MenuButton = ({ title, func = () => {} }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={func}>
      <View style={styles.button_background}>
        <Text style={styles.button_text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button_background: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 2,
  },

  button_text: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    fontFamily: "Optima, sans-serif",
  },
});

export default MenuButton;
