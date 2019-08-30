import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';

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
       
      
        <Mybutton
          title="Find the latest news!"
          customClick={() => this.props.navigation.navigate('View')}
        />
       
      </View>
    );
  }
}
