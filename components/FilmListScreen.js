import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native' 
import { FlatList } from 'react-native-gesture-handler';
import Films from '../assets/films.json';
import { Input } from '@ui-kitten/components';

export default function FilmListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle} >Films</Text>
            <FlatList 
                data={Films}
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("FilmDetailsScreen", {item: item})}>
                        <View style={styles.filmContainer}>
                            <Text style={styles.primaryText}>
                            {item.Title} - {item.Year}
                            </Text>
                            <Text>Director : {item.Director}</Text>
                            <Text>Genre : {item.Actors}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={renderHeader}
            />
        </View>
    );
}

const state = {
    loading: false,      
    data: [],      
    error: null,    
};

searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
    const itemData = `${item.name.title.toUpperCase()}   
    ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
    
    const textData = text.toUpperCase();
    
    return itemData.indexOf(textData) > -1;    
});

this.setState({ data: newData });  
};

const renderHeader = () => (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        status='info'
        placeholder='Search'
        style={{
          borderRadius: 25,
          borderColor: '#333',
          backgroundColor: '#fff'
        }}
        textStyle={{ color: '#000' }}
      />
    </View>
  )

const renderSeparator = () => {
    return (
      <View
        style={styles.renderSeparator}
      />
    )
  }
  

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-around",
        justifyContent: "center",
        alignItems: 'center',
    },
    renderSeparator: {
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '5%'
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
})