import { StackNavigator } from 'react-navigation';

import Login from './components/Login';
import SwiperScreen from './components/SwiperScreen';

const AppNavigator = new StackNavigator(
  {
    Login: { screen: Login },
    Prefs: { screen: SwiperScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null
    }
  }
);

export default AppNavigator;
