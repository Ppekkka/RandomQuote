import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RanScreen from "./Screens/RanScreen";
import AddScreen from "./Screens/AddScreen";
import QuoScreen from "./Screens/QuoScreen";
import BookScreen from "./Screens/BookScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Ran" component={RanScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Quo" component={QuoScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
