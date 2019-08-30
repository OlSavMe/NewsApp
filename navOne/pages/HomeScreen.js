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
          backgroundColor: '#C8C8A9',
          flexDirection: 'column',
        }}>
        <Mytext text='' />
      
        <Mybutton
          title="Find the latest news!"
          customClick={() => this.props.navigation.navigate('View')}
        />
       
      </View>
    );
  }
}
