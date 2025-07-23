import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BookCard = ({ title_eng, title_rus, author }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.book_text}>
        "{title_eng}" ("{title_rus}")
      </Text>
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
