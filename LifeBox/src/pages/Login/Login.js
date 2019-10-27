import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { Input, Button } from 'react-native-elements';

function Login(props) {
  const [emailValue, updateEmail] = useState('');
  const [passwordValue, updatePassword] = useState('');
  const [isLoading, updateIsLoading] = useState(false);

  function validateForm() {
    return emailValue.length > 0 && passwordValue.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    updateIsLoading(true);

    try {
      await Auth.signIn(emailValue, passwordValue).then(user => {
        Auth.currentAuthenticatedUser().then((session) => {
          console.warn(session);
        }).catch((error) => {
          console.warn(error);
        });
        console.warn(user);
        updateIsLoading(false);
        if (user) props.navigation.navigate('App');
      }).catch(error => {
        console.warn(error);
        updateIsLoading(false);

      });;
    } catch (e) {
      alert(e.message);
      updateIsLoading(false);

    }
  }

  return (
    <>
      <Input
        label='email'
        type="email"
        placeholder='Enter your email address'
        onChangeText={updateEmail}
      />
      <Input
        label='password'
        type="password"
        placeholder='Enter your account password'
        onChangeText={updatePassword}
      />
      <Button title='Login' loading={isLoading} disabled={!validateForm()} onPress={handleSubmit} />
      <Button title='Sign Up' onPress={() => props.navigation.navigate('SignUp')} />
    </>
  );
}

export default Login;
