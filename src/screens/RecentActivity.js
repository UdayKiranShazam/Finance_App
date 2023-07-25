import { View, Text, StyleSheet, FlatList, Animated, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import DownComponent from '../components/DownComponent';
import ListCard from '../components/cards/ListCard';
import { DailyActivity } from '../components/activity/dailyactivity';
import TopHeader from '../components/header/TopHeader';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RecentActivity = ({ navigation }) => {
  const RightSwipe = ({ dragX }) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <Animated.View style={{ transform: [{ scale: scale }] }}>
        <View style={styles.showIcons}>
          <View style={styles.icon}>
            <Icon
              name="delete"
              size={30}
              color={Colors.crimson}
              //style={styles.icon}
            />
          </View>
          <Text style={{ fontSize: 14, color: '#9BA6CA' }}>Delete</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <LinearGradient style={styles.rootContainer} colors={[Colors.screen_p, Colors.screen_s]}>
        <View style={styles.rootContainer}>
          <TopHeader title={'Recent Activity'} onPress={() => navigation.navigate('homescreen')} />
          <View style={{ margin: 5 }} />
          <FlatList
            data={DailyActivity}
            keyExtractor={(item) => item.title}
            renderItem={({ item, index }) => {
              return (
                <Swipeable
                  key={item.title}
                  rightThreshold={40}
                  overshootRight={true}
                  renderRightActions={(progress, dragX) => (
                    <RightSwipe progress={progress} dragX={dragX} />
                  )}>
                  <Pressable onPress={() => navigation.navigate('addincome')}>
                    <ListCard
                      title={item.title}
                      tag={item.tag}
                      source={item.icon}
                      id={index}
                      payment={item.payment}
                      amount={item.amount}
                      date={item.date}
                    />
                  </Pressable>
                </Swipeable>
              );
            }}
          />
        </View>
        <DownComponent navigation={navigation} />
      </LinearGradient>
    </GestureHandlerRootView>
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
  },
  showIcons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    marginTop: 10,
    paddingHorizontal: 20
  }
});

export default RecentActivity;
