import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import ViewNews from './pages/ViewNews';

 
const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'NewsApp',
      headerStyle: { backgroundColor: 'yellow' },
      headerTintColor: 'black',
    },
  },
  View: {
    screen: ViewNews,
    navigationOptions: {
      title: 'News',
      headerStyle: { backgroundColor: 'yellow' },
      headerTintColor: 'black',
    },},
});

export default createAppContainer(App);
