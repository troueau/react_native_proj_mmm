import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native' 
import { FlatList } from 'react-native-gesture-handler';
import Films from '../assets/films.json';
import { Searchbar } from 'react-native-paper';

export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: Films,
        value: '',
      };

      this.arrayholder = Films;
    }
  
    renderSeparator = () => {
      return (
        <View
          style={styles.renderSeparator}
        />
      );
    };
  
    searchItems = text => {
        if(text) {
            let newData = this.arrayholder.filter(item => {
                const itemData = `${item.Director.toUpperCase()} || ${item.Title.toUpperCase()} || ${item.Actors.toUpperCase()}`;
                const textData = text.toUpperCase();
              if(text.length > 0 ){
                return itemData.indexOf(textData) > -1;
              }
            });
            this.setState({
            data: newData,
            value: text,
            });
        } else {
            this.setState({
                data: this.arrayholder,
                value: '',
            })
        }
    };

    renderHeader = () => {
        return (
            <View>
                <Text style={styles.mainTitle} >Films</Text>
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Search"
                    value={this.state.value}
                    onChangeText={text => this.searchItems(text)}
                />
            </View>
        )
    }
  
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
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
                keyExtractor={item => item.Title}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
            />
            </View>
        );
    }

     
  }
  

const styles = StyleSheet.create({
    container: {
        display: "flex",
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
        padding: 15,
        textAlign: 'center',
    },
    primaryText: {
        marginBottom: 8,
        fontWeight: 'bold',
    },
    searchBar: {
        marginBottom: 20, 
        marginHorizontal:8,
    }
})