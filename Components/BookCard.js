import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BookCard = ({ title, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Book", { name: "Book", title })}
    >
      <Text style={styles.book_text}>"{title}"</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: "100%",
    padding: 20,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    marginBottom: 10,
  },

  book_text: {
    fontSize: 15,
    color: "white",
    fontFamily: "Optima, sans-serif",
  },
});

export default BookCard;
