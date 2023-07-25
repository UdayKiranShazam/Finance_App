import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Fontisto';
import { Colors } from '../../constants/Colors';

const TopHeader = ({ onPress, title, text }) => {
  return (
    <View style={styles.topHolder}>
      <View style={[styles.iconHolder, { paddingLeft: 20, paddingBottom: 10 }]}>
        <BackIcon name="arrow-left-l" color={'#9BA6CA'} size={30} onPress={onPress} />
      </View>
      <View style={styles.titleHolder}>
        <Text style={[styles.title, { paddingRight: !text ? 50 : 0 }]}>{title}</Text>
      </View>
      {text && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topHolder: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconHolder: {
    alignItems: 'flex-start',
    paddingTop: 8
  },
  titleHolder: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    paddingTop: 4,
    color: '#CAD7E9',
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary
  },
  buttonText: {
    color: Colors.crimson,
    fontSize: 16,
    fontWeight: '300'
  }
});

export default TopHeader;
