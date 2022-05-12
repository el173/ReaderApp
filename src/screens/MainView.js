/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {GET_TOP_STORIES} from '../actionTypes';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Main = ({getTopStories}) => {
  useEffect(() => {
    getTopStories();
  }, []);

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const mapStateToProps = state => {
  return {
    topStories: state.mainViewReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getTopStories: () => {
      dispatch({
        type: GET_TOP_STORIES,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
