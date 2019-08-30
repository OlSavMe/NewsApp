import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          flexDirection: 'column',
        }}>
        <Mytext text="News" />
      
        <Mybutton
          title="Find the latest news!"
          customClick={() => this.props.navigation.navigate('View')}
        />
       
      </View>
    );
  }
}
