import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';

import {GET_TOP_STORIES} from '../../actionTypes';

import {ClickableRow} from '../../components';

const TopStoriesTab = ({getTopStories, navigation, topStories}) => {
  useEffect(() => {
    getTopStories();
  }, []);

  const keyExtractor = (item, index) => index;

  return (
    <View style={styles.container}>
      <FlatList
        data={topStories}
        // extraData={this.state}
        // onRefresh={() => this.onRefresh()}
        // refreshing={this.state.isFetching}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => (
          <ClickableRow
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
