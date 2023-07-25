import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import DownComponent from '../components/DownComponent';
import ListCard from '../components/cards/ListCard';
import { Expenses } from '../components/activity/dailyactivity';
import TopHeader from '../components/header/TopHeader';

const ExpensesScreen = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <LinearGradient style={styles.rootContainer} colors={[Colors.screen_p, Colors.screen_s]}>
        <View style={styles.rootContainer}>
          <TopHeader title={'Total Expenses'} onPress={() => navigation.navigate('homescreen')} />
          <View style={styles.amountHolder}>
            <Text style={styles.amtValue}>
              <Text style={styles.rupee}>₹ </Text>45,000.<Text style={styles.paise}>36</Text>
            </Text>
            <Text style={styles.totalInDate}>
              <Text style={styles.totalInDateText}>Upto</Text> 1st Jul 2023
            </Text>
          </View>
          <FlatList
            data={Expenses}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <ListCard
                  title={item.title}
                  tag={item.tag}
                  source={item.icon}
                  id={index}
                  payment={item.payment}
                  amount={item.amount}
                  date={item.date}
                />
              );
            }}
          />
        </View>
        <DownComponent navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  iconHolder: {
    alignItems: 'flex-start',
    paddingLeft: 8,
    paddingTop: 8
  },
  topHolder: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  amountHolder: {
    marginVertical: 20,
    alignItems: 'center'
  },
  rupee: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '300'
  },
  amtValue: {
    paddingTop: 5,
    color: Colors.white,
    fontSize: 35,
    fontWeight: '300',
    textAlign: 'center'
  },
  paise: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '300'
  },
  totalInDateText: {
    color: Colors.darkGrey
  },
  totalInDate: {
    color: Colors.steellightblue
  }
});

export default ExpensesScreen;
