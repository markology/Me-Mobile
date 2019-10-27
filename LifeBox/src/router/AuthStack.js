import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

export default createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  }
});