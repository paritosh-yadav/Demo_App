/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

//Redux
import { Provider, connect } from 'react-redux'
import configureStore from './src/redux/configureStore'
import Routes from './src/app'

import {addNavigationHelpers} from 'react-navigation';


const Apps = ({dispatch, nav}) => (
  <Routes
  navigation={addNavigationHelpers({
    dispatch,
    state: nav,
  })}
  />
)

const mapStateToProps = state => ({
  nav: state.nav,
})

const AppWithNavigation = connect(mapStateToProps)(Apps)

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
)

AppRegistry.registerComponent('punchh_demo', () => ReduxApp);
