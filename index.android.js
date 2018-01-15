/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  BackHandler
} from 'react-native';

//Redux
import { Provider, connect } from 'react-redux'
import configureStore from './src/redux/configureStore'
import Routes from './src/app'

import { addNavigationHelpers, NavigationActions } from 'react-navigation';

class ReduxNavigation extends Component {
  
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <Routes navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

const AppWithNavigation = connect(mapStateToProps)(ReduxNavigation)

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
)

AppRegistry.registerComponent('punchh_demo', () => ReduxApp);