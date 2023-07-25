import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from './src/constants/Colors';
import GoogleIcon from 'react-native-vector-icons/FontAwesome'
import Routes from './src/navigation/routes';

const App = () => {

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0.5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontStyle: 'italic',
    color: Colors.white
  },
  infoHolder:{
    marginTop: 100,
    marginBottom: 20,
  },
  info: {
    color: Colors.white,
    fontSize: 16,
  },
  buttonHolder: {
    marginVertical: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: Colors.primary,
    borderRadius: 26,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buttonText: {
    fontSize: 18,
    paddingLeft: 10,
    color: Colors.white
  },
});

export default App;
