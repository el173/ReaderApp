import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const StoryCard = ({newsItem, navigation}) => {
  const {title, time, by, kids} = newsItem;

  const getDateTime = passedTime => new Date(passedTime * 1000).toUTCString();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.btnViewCommentContainer}
        onPress={() => navigation.navigate('detailView', {kids})}>
        <Text
          style={
            styles.btnViewComment
          }>{`View ${kids.length} Comment(s)`}</Text>
      </TouchableOpacity>
      <View style={styles.footerCaptionContainer}>
        <View style={styles.footerCaptionCol1}>
          <Text style={styles.txtCaptionText}>{getDateTime(time)}</Text>
        </View>
        <View style={styles.footerCaptionCol2}>
          <Text style={styles.txtCaptionText}>{`By: ${by}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 15,
    elevation: 3,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#000000',
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
  },
  footerCaptionContainer: {
    flexDirection: 'row',
  },
  footerCaptionCol1: {
    flex: 0.75,
  },
  footerCaptionCol2: {
    flex: 0.25,
  },
  btnViewCommentContainer: {
    flex: 1,
    marginBottom: 15,
  },
  btnViewComment: {
    fontSize: 14,
    color: '#178DE7',
  },
  txtCaptionText: {
    fontSize: 12,
  },
});

export default StoryCard;
