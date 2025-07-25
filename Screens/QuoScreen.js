import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Menu from "../Components/Menu";
import BookCard from "../Components/BookCard";
import { useEffect, useState } from "react";
import { getBooks } from "../helpers/getBooks";

const QuoScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const handleSetBook = async () => {
      setBooks(await getBooks());
    };
    handleSetBook();
  }, []);

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />

      <SafeAreaView style={styles.book_cards_container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {books.length &&
            books.map((title, idx) => {
              return (
                <BookCard title={title} navigation={navigation} key={idx} />
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
  book_cards_container: {
    flex: 15,
    marginTop: 30,
  },
});

export default QuoScreen;
