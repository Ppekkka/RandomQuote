import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Menu from "../Components/Menu";
import BookCard from "../Components/BookCard";

books = [
  {
    title_eng: "oiifdowif",
    title_rus: "шрири",
    author: "IJijn Nnjnk",
  },
  {
    title_eng: "oiifdowif ouhiu hiu",
    title_rus: "шрири шгр шгршгшгп",
    author: "IJi ibiguy ijoijoi",
  },
  {
    title_eng: "oiifdowif ouhiu hiu",
    title_rus: "шрири шгр шгршгшгп",
    author: "IJi ibiguy ijoijoi",
  },
  {
    title_eng: "oiifdowif ouhiu hiu",
    title_rus: "шрири шгр шгршгшгп",
    author: "IJi ibiguy ijoijoi",
  },
  {
    title_eng: "oiifdowif ouhiu hiu",
    title_rus: "шрири шгр шгршгшгп",
    author: "IJi ibiguy ijoijoi",
  },
  {
    title_eng: "oiifdowif ouhiu hiu",
    title_rus: "шрири шгр шгршгшгп",
    author: "IJi ibiguy ijoijoi",
  },
  {
    title_eng: "oiifdowif ouhiu hiu",
    title_rus: "шрири шгр шгршгшгп",
    author: "IJi ibiguy ijoijoi",
  },
  {
    title_eng: "oiifdowif ouhiu hiu",
    title_rus: "шрири шгр шгршгшгп",
    author: "IJi ibiguy ijoijoi",
  },
];

const QuoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />

      <SafeAreaView style={styles.book_cards_container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {books.map(({ title_eng, title_rus, author }) => {
            return (
              <BookCard
                title_eng={title_eng}
                title_rus={title_rus}
                author={author}
              />
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
    paddingVertical: 35,
    paddingHorizontal: 20,
    height: "100%",
  },
  book_cards_container: {
    flex: 15,
    marginTop: 30,
  },
});

export default QuoScreen;
