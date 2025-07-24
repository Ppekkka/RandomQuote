import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Menu from "../Components/Menu";
import { useState } from "react";
import { setQuotes } from "../helpers/setQuotes";

const AddScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  const handleAdd = async () => {
    if (text) {
      await setQuotes(text);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />
      <View style={styles.textinput_container}>
        <TextInput
          style={styles.textinput_quotes}
          placeholder="Type your quotes there..."
          placeholderTextColor="grey"
          multiline
          value={text}
          onChangeText={(txt) => setText(txt)}
        />
      </View>
      <TouchableOpacity style={styles.add_button} onPress={handleAdd}>
        <Text style={styles.add_text}>+</Text>
      </TouchableOpacity>
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
  textinput_container: {
    flex: 15,
  },
  textinput_quotes: {
    color: "white",
    fontSize: 20,
    fontFamily: "Optima, sans-serif",
    height: "100%",
    textAlignVertical: "top",
  },
  add_button: {
    backgroundColor: "#232323",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 2,
    position: "absolute",
    bottom: 70,
    right: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  add_text: {
    fontSize: 40,
    color: "white",
  },
});

export default AddScreen;
