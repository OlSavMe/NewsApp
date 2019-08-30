import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';
import Hyperlink from 'react-native-hyperlink';


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
        <Image style={{width: 80, height: 80, margin: 2}}
        source={{uri: item.urlToImage}} />
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 3}}>
            {item.title}
            </Text>
            <Text style={{fontSize: 14, color: '#2A363B'}}>
            {item.description}
            </Text>
  <Hyperlink linkDefault={ true }>
    <Text style={ { fontSize: 15, color: 'blue' } }>
    {item.url}
    </Text>
  </Hyperlink>
        </View>
        </View>
       
    );}

    renderSeparator = () => {
        return (
            <View
                style = {{height: 1, width: '100%', backgroundColor: 'black'}}>
            </View>
        )
    }

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
        keyExtractor={item => item.publishedAt}
        ItemSeparatorComponent={this.renderSeparator}
   />
      </View>
    );
  }
}
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 30,
      backgroundColor: '#fbf9d5',
      overflow: 'scroll',
     
    },
   
  });
