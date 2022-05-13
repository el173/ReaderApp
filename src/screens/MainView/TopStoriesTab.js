import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';

import {GET_TOP_STORIES} from '../../actionTypes';

import {StoryCard} from '../../components';

const TopStoriesTab = ({getTopStories, navigation, topStories}) => {
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getTopStories();
  }, []);

  useEffect(() => {
    setRefreshing(false);
  }, [topStories]);

  const onRefresh = () => {
    setRefreshing(true);
    getTopStories();
  };

  const keyExtractor = (item, index) => index;

  if (topStories.length <= 0) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={'#178DE7'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={topStories}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => (
          <StoryCard
            key={`${index}-${item.time}`}
            newsItem={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    topStories: state.mainViewReducer.topStories,
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
