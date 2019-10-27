import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AuthLoading from './AuthLoading';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
