import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const MyWebView = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.google.com' }}/>
    </View>
   )
}

export default MyWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})