import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const MyWebView = props => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: props.uri }}/>
    </View>
   )
}

MyWebView.propTypes = {
  uri: PropTypes.string.isRequired
}

export default MyWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})