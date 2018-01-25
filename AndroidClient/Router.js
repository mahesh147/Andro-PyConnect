import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SetIP from './SetIP';
import Client from './Client';

const RouterComponent = () => {
  return (
    <Router>

      <Scene key="root">
        <Scene key="setIP" component={SetIP} intial />
        <Scene key="client" component={Client} />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
