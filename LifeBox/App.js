import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/redux/reducers';

import awsConfig from './src/config/awsConfig';
import StateLoader from './src/StateLoader';

const store = createStore(reducers);

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: awsConfig.cognito.REGION,
    userPoolId: awsConfig.cognito.USER_POOL_ID,
    identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: awsConfig.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: awsConfig.s3.REGION,
    bucket: awsConfig.s3.BUCKET,
    identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "todos",
        endpoint: awsConfig.apiGateway.URL,
        region: awsConfig.apiGateway.REGION
      },
    ]
  }
});

function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <StateLoader />
      </Provider>
    </PaperProvider>
  )
};

export default App;