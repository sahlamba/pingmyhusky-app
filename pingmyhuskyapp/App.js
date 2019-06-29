/*
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import Config from 'react-native-config'
import firebase from 'firebase'

import MyWebView from './src/webview';

const fireConfig = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  databaseURL: Config.databaseURL,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId,
}

if (!firebase.apps.length) {
  firebase.initializeApp(fireConfig);
}

export default class App extends Component {
  state = {
    uri: ""
  }

  componentWillMount() {
    firebase.database().ref('stream').on('value', snapshot => {
      const stream = snapshot.val()
      const httpsTunnel = stream.tunnels && stream.tunnels.length ? stream.tunnels.filter(t => t.proto === 'https')[0] : {
        public_url: "https://www.google.com"
      }
      this.setState({
        uri: httpsTunnel.public_url
      })
    })
  }

  render() {
    return ( <
      MyWebView uri = {
        this.state.uri
      }
      />
    );
  }
}