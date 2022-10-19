import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Rating } from 'react-native-rating-element';


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
          
          <Rating
            rated={3.7}
            totalCount={5}
            ratingColor="#f1c644"
            ratingBackgroundColor="#d4d4d4"
            size={24}
            icon="ios-star"
            direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
          />
        </ScrollView>
      </View>
    )
}




const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,
  },
  filmContainer: {
    padding: 10,
  },
  mainTitle: {
    fontSize : '30',
    fontWeight : 'bold',
    padding: 20,
    textAlign: "center",
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