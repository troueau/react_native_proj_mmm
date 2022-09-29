import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native' 
import { FlatList } from 'react-native-gesture-handler';
import Films from '../assets/films.json';
import { Searchbar } from 'react-native-paper';

export default function FilmListScreen({ navigation }) {
    return (
        <View style={styles.container}>
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
                ListHeaderComponent={listHeader}
            />
        </View>
    );
}

const listHeader = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle} >Films</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={() => navigation.navigate("HomeScreen")}
            />
        </View>
    );
};

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