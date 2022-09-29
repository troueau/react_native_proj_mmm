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
import Icon from "react-native-vector-icons/Ionicons";

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

    renderItem({item, navigation}) {
        return (
          <View style={styles.listItem}>
            <Icon
                name="image-outline"
                color="#007AFF"
                size={50}
            />
            <View style={{alignItems:"center",flex:1}}>
              <Text style={{fontWeight:"bold"}}>{item.Title}</Text>
              <Text>{item.Year}</Text>
              <Text>{item.Director}</Text>
            </View>
            <TouchableOpacity 
                style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
                onPress={() => navigation.navigate("FilmDetailsScreen", {item: item})}>
                <Icon
                    name="chevron-forward-outline"
                    color="black"
                    size={40}
                    style={{width:30, height:40,borderRadius:40}}
                />
            </TouchableOpacity>
          </View>
        );
      }
  
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <this.renderItem item={item} navigation={navigation}/>
                )}
                keyExtractor={item => item.Title}
                ListHeaderComponent={this.renderHeader}
            />
            </View>
        );
    }

     
  }
  

const styles = StyleSheet.create({
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
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
      },
    listItem: {
        margin:8,
        padding:10,
        backgroundColor:"#FFF",
        width:"95%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
    }
})