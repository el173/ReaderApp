import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import {GET_TOP_STORIES} from '../../actionTypes';

const TopStoriesTab = ({getTopStories}) => {
  useEffect(() => {
    getTopStories();
  }, []);

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesTab);
