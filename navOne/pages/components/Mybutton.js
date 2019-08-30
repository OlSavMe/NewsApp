import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2F9599',
    color: 'black',
    padding: 30,
    marginTop: 190,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadowRadius: 80,
    fontSize: 25,
  },
});
export default Mybutton;
 