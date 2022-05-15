import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from 'react-native';
import RenderHtml from 'react-native-render-html';

const StoryCard = ({newsItem, onPress}) => {
  const {text, time, by, kids} = newsItem;
  const {width} = useWindowDimensions();
  const getDateTime = passedTime => new Date(passedTime * 1000).toUTCString();

  const htmlSource = {
    html: `<html>
      ${text}
    </html>`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {/* <Text style={styles.titleText}>{text}</Text> */}
        <RenderHtml contentWidth={width} source={htmlSource} />
      </View>
      {/* <TouchableOpacity
        style={styles.btnViewCommentContainer}
        disabled={!kids}
        onPress={onPress}>
        <Text style={styles.btnViewComment}>
          {kids && kids.length > 0
            ? `View ${kids.length} Comment(s)`
            : 'No Comments'}
        </Text>
      </TouchableOpacity> */}
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

const shadow = Platform.select({
  android: {
    elevation: 3,
  },
  ios: {
    shadowRadius: 2,
    shadowColor: 'rgba(0, 0, 0, 1.0)',
    shadowOpacity: 0.54,
    shadowOffset: {width: 0, height: 2},
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 15,
    elevation: 3,
    borderRadius: 10,
    ...shadow,
  },
  titleContainer: {
    // marginBottom: 10,
    // flex: 1,
  },
  titleText: {
    fontSize: 18,
  },
  footerCaptionContainer: {
    flexDirection: 'row',
    marginTop: 10,
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

export default React.memo(StoryCard);
