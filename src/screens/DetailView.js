import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  BackHandler,
} from 'react-native';

import {CommentCard} from '../components';

import {GET_ITEM_DETAILS, CLEAR_ITEM_DETAILS} from '../actionTypes';

const DetailView = ({
  navigation,
  kids,
  getItemDetails,
  itemDetails,
  clearItemDetails,
}) => {
  const onBackPress = () => {
    clearItemDetails();
  };

  useEffect(() => {
    getItemDetails(kids);
    return onBackPress;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  if (itemDetails.length <= 0) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={'#178DE7'} />
      </View>
    );
  }

  const keyExtractor = (item, index) => index;
  const renderItem = ({item, index}) => (
    <CommentCard
      key={`${index}-${item.time}`}
      newsItem={item}
      navigation={navigation}
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

  return (
    <View style={styles.container}>
      <FlatList
        data={itemDetails}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
      />
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
});

const mapStateToProps = (state, props) => {
  return {
    itemDetails: state.detailsViewReducer.itemDetails,
    ...props.route.params,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getItemDetails: payload => {
      dispatch({
        type: GET_ITEM_DETAILS,
        payload,
      });
    },
    clearItemDetails: payload => {
      dispatch({
        type: CLEAR_ITEM_DETAILS,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
