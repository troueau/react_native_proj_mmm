import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native' 
import Icon from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homepage} >
      <Text >Home Screen</Text>
      <Button
        title="Start"
        onPress={() =>
          navigation.navigate("FilmListScreen")
        } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})