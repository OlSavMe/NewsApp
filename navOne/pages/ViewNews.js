import React from 'react';
import { Text, View, FlatList, List, ActivityIndicator, StyleSheet, Image } from 'react-native';


export default class ViewNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        isLoading: true
    }; 
}
  
  
  renderItem = ({ item }) => {
    return (
    <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
        <Image style={{width: 80, height: 80, margin: 4}}
        source={{uri: item.urlToImage}} />
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'black', marginBottom: 15}}>
            {item.title}
            </Text>
            <Text style={{fontSize: 16, color: 'red'}}>
            {item.description}
            </Text>
        </View>
        </View>
       
    );}

  componentDidMount() {
      return fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=01089335f2c4461dae8920581a769091')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        })
    })

      .catch((error) =>{
        console.log(error)
      });
  }
  
  
  render() {
        return(     
<View style={styles.container}>
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={({id}, index) => id}
   />
      </View>
    );
  }
}
 
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#fbf9d5',
     
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
  });
