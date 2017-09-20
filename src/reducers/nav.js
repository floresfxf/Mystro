import AppNavigator from '../navigator';

const initialState = {
  index: 0,
  routes: [{ key: 'Init', routeName: 'Login' }]
};

export default (state = initialState, action) =>
  AppNavigator.router.getStateForAction(action, state);
