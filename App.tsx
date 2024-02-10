import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('window');
const App = () => {
  const Loading = (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} />
    </View>
  );
  return (
    <SafeAreaView style={styles.page}>
      <WebView
        source={{uri: 'https://logedosoft.com/'}}
        style={{flex: 1}}
        renderLoading={() => Loading}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  loading: {
    width,
    height,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
