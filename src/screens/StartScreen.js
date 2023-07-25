import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Colors } from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import GoogleIcon from 'react-native-vector-icons/FontAwesome'

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
        <LinearGradient style={styles.container} colors={[Colors.screen_p,Colors.screen_s]}>
            <View style={styles.title}>
                <Text style={styles.text}>
                    Welcome
                </Text>
            </View>
            <View>
                <Image source={require('../assets/logo-finance.png')} style={{width: 300, height: 160, resizeMode: 'cover'}} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 16, color: '#9BA6CA'}}>One app for everything you need</Text>
            <View style={styles.infoHolder}>
            </View>
            <View style={styles.buttonHolder}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('homescreen')}>
                    <GoogleIcon name='google' size={20} color={Colors.crimson}/>
                    <Text style={styles.buttonText}>Google</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.info}>logIn or signUp, Using Google</Text>
        </LinearGradient>
    </View>
  )
};

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
    marginTop: 80,
    marginBottom: 20,
    },
    info: {
    color: Colors.white,
    fontSize: 16,
    paddingVertical: 20,
    },
    buttonHolder: {
    marginVertical: 5,
    },
    button: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#364160',
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

export default StartScreen;
