import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';

const DownComponent = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('homescreen');
          }}
          style={[styles.financeCtn, { backgroundColor: '#2C3A61' }]}>
          <View style={[styles.dollarCtn, { borderColor: Colors.white }]}>
            <Text style={[styles.dollar, { color: Colors.white }]}>$</Text>
          </View>
          <Text style={[styles.dollarTxt, { color: Colors.white }]}>Finance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('tasks');
          }}
          style={[styles.todoCtn, { backgroundColor: '#2C3A61' }]}>
          <View style={{ paddingTop: 5 }}>
            <Ionicon name="checkmark-circle-outline" size={32} color={Colors.white} />
          </View>
          <View style={{ paddingTop: 10, paddingLeft: 5 }}>
            <Text style={{ fontSize: 16, color: Colors.white }}>Todo Manager</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 30
  },
  container: {
    borderRadius: 30,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#212D50'
  },
  financeCtn: {
    elevation: 0,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6
  },
  dollarCtn: {
    width: 30,
    height: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dollar: {
    fontSize: 18,
    fontWeight: '600'
  },
  dollarTxt: {
    paddingLeft: 10,
    fontSize: 16,
    color: Colors.white
  },
  todoCtn: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 30
  }
});

export default DownComponent;
