/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import type {Node} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import WebView from 'react-native-webview';

const LoadingWebView = () => {
  return (
    <View style={defaultStyles.loadingComponent}>
      <Text style={defaultStyles.loadingText}>Cargando recursos</Text>
    </View>
  );
};

const ErrorPopUpComponent = () => {
  return (
    <View style={defaultStyles.errorComponent}>
      <Text style={defaultStyles.errorText}>Recurso no disponible</Text>
    </View>
  );
};

const App: () => Node = () => {
  const webViewRef = useRef(null);

  const sendPostMessage = () => {
    console.log('Sending post message');

    webViewRef.current.postMessage('firstPostThatLoads');
  };

  return (
    <View style={[defaultStyles.container]}>
      <TouchableHighlight
        style={{padding: 10, backgroundColor: 'blue', marginTop: 80}}
        onPress={() => sendPostMessage()}>
        <Text style={{color: 'white'}}>Cambiar estado de capa</Text>
      </TouchableHighlight>
      <WebView
        style={{
          marginTop: 20,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        ref={webViewRef}
        startInLoadingState
        cacheEnabled={false}
        scalesPageToFit
        scrollEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        javaScriptEnabledAndroid
        source={{
          uri: 'https://dancar97.github.io',
        }}
        renderLoading={() => {
          return <LoadingWebView />;
        }}
        renderError={() => {
          return <ErrorPopUpComponent />;
        }}
        originWhitelist={['https://*']}
      />
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  test: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },

  errorComponent: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  errorText: {
    color: 'grey',
  },
  loadingComponent: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  loadingText: {
    color: 'grey',
  },
});

export default App;
