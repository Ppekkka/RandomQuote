import { StyleSheet, View, Text } from "react-native";

const Quote = ({ text, isLast }) => {
  return (
    <View style={isLast ? { width: "100%" } : styles.container}>
      <Text style={styles.quote_text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 10,
  },
  quote_text: {
    color: "white",
    fontFamily: "Optima, sans-serif",
    fontSize: 15,
  },
});

export default Quote;
