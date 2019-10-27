
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { updateAuth } from '../../redux/actions/authActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

function TestScreen(props) {
  async function handleLogout() {
    try {
      await Auth.signOut();
      props.navigation.navigate('Auth');
    }
    catch (e) {
      props.navigation.navigate('Auth');
      console.warn(e);
      if (e !== 'No current user') {
        console.warn(e);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Button title="logout" onPress={handleLogout} />
    </View>
  );
}

TestScreen.navigationOptions = {
  title: 'TestScreen',
};

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = () => {
  return {
    updateAuth
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);

