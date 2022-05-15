import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import {
  GET_TOP_STORIES,
  GET_TOP_STORIES_INFO,
  SET_TOP_STORY_REFRESHING,
} from '../../actionTypes';

import {StoryCard} from '../../components';

const {width} = Dimensions.get('window');

const TopStoriesTab = ({
  getTopStories,
  navigation,
  topStoriesObj,
  getStoriesInfo,
  topStoriesInfo,
  isTopStoryRefreshing,
  setIsRefreshing,
}) => {
  const [isRefreshing, setRefreshing] = useState(false);
  const [topStoriesDetails, setTopStoriesDetails] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    getTopStories();
  }, []);

  useEffect(() => {
    setTopStoriesDetails(topStoriesInfo.data);
    setIsLoadMore(false);
  }, [topStoriesInfo]);

  useEffect(() => {
    if (topStoriesObj && topStoriesObj.length > 0) {
      getStoriesInfo({isRefreshing});
    }
  }, [topStoriesObj]);

  useEffect(() => {
    setRefreshing(isTopStoryRefreshing);
  }, [isTopStoryRefreshing]);

  const onRefresh = () => {
    setIsRefreshing(true);
    setRefreshing(true);
    getTopStories();
  };

  const onEndReached = () => {
    setIsLoadMore(true);
    getStoriesInfo({fromFetchMore: true});
  };

  const onPress = item => {
    navigation.navigate('Details', {kids: item.kids});
  };

  const keyExtractor = (item, index) => index;
  const renderItem = ({item, index}) => (
    <StoryCard
      key={`${index}-${item.time}`}
      newsItem={item}
      onPress={() => onPress(item)}
    />
  );

  const ITEM_HEIGHT = 65;
  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index,
    };
  };

  if (topStoriesDetails.length <= 0) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={'#178DE7'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={topStoriesDetails}
        extraData={topStoriesDetails}
        onRefresh={() => onRefresh()}
        refreshing={isRefreshing}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        onEndReachedThreshold={0.2}
        onEndReached={() => onEndReached()}
      />
      {isLoadMore ? (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'#178DE7'} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: width,
    height: 50,
  },
});

const mapStateToProps = state => {
  return {
    topStoriesObj: state.mainViewReducer.topStories,
    topStoriesInfo: state.mainViewReducer.topStoriesInfo,
    isTopStoryRefreshing: state.mainViewReducer.isTopStoryRefreshing,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getTopStories: () => {
      dispatch({
        type: GET_TOP_STORIES,
      });
    },
    getStoriesInfo: payload => {
      dispatch({
        type: GET_TOP_STORIES_INFO,
        payload,
      });
    },
    setIsRefreshing: payload => {
      dispatch({
        type: SET_TOP_STORY_REFRESHING,
        payload,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesTab);
