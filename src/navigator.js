import { StackNavigator } from 'react-navigation';

import Login from './components/Login';
import SwiperScreen from './components/SwiperScreen';
import Register from './components/Register'

const AppNavigator = new StackNavigator(
  {
    Login: { screen: Login },
    Prefs: { screen: SwiperScreen },
    Register: {screen: Register}
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null
    }
  }
);

export default AppNavigator;
