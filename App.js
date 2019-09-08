import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShow from './src/screens/ResultsShow';

const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShow 
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
});

export default createAppContainer(navigator);