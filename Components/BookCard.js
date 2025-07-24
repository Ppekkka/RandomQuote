import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BookCard = ({ title, author }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.book_text}>"{title}"</Text>
      <Text style={styles.book_text}>- {author}</Text>
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
    justifyContent: "space-between",
    marginBottom: 10,
  },

  book_text: {
    fontSize: 15,
    color: "white",
    fontFamily: "Optima, sans-serif",
  },
});

export default BookCard;
