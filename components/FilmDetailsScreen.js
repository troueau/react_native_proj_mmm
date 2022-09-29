import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


export default function FilmDetailsScreen({navigation, route}) {
    const {item} = route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Details about the film</Text>
        <ScrollView>
          <Text style={styles.primaryText}>{item.Title}</Text>
          <Text>Year: {item.Year}</Text>
          <Text>Genre: {item.Genre}</Text>
          <Text>Director: {item.Director}</Text>
          <Text>Main actors: {item.Actors}</Text>
          <Text>MetaScore: {item.Metascore}</Text>
          <Text>Imdb Votes: {item.imdbVotes}</Text>
          <Image style={styles.image} source={{uri: item.Images[0]}} />
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    justifyContent: "center",
    alignItems: 'center',
  },
  filmContainer: {
    padding: 10,
  },
  mainTitle: {
    fontSize : '30',
    fontWeight : 'bold',
    padding: 20,
  },
  primaryText: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  image: {
    resizeMode: "center",
    width: 300,
    height: 300,
  },
})