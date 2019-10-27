import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AuthLoading from './AuthLoading';

const switchNavigator = createSwitchNavigator({
  AuthLoading,
  Auth: AuthStack,
  App: AppStack,
},
  {
    initialRouteName: 'AuthLoading',
  }
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
