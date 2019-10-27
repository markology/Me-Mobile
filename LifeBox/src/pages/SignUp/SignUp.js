import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { Input, Button } from 'react-native-elements';

function SignUp(props) {
  const [emailValue, updateEmail] = useState('');
  const [passwordValue, updatePassword] = useState('');
  const [isLoading, updateIsLoading] = useState(false);

  function validateForm() {
    return emailValue.length > 0 && passwordValue.length > 0;
  }

  async function handleSubmit(event) {
    console.warn('hi')
    event.preventDefault();

    updateIsLoading(true);
    try {
      await Auth.signUp({ username: emailValue, password: passwordValue, attributes: { email: emailValue } }).then(user => {
        console.log(user);
        updateIsLoading(false);
        if (user) props.navigation.navigate('App');
      }).catch(error => {
        updateIsLoading(false);
        console.log(error);
      });;

    } catch (e) {
      updateIsLoading(false);
      alert(e.message);
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
      <Button title='Sign Up!' loading={isLoading} disabled={!validateForm()} onPress={handleSubmit} />
      <Button title='Login' onPress={() => props.navigation.navigate('Login')} />
    </>
  );
}

export default SignUp;
