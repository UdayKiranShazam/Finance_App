import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Entypo'
import { Colors } from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from '@rneui/themed';
import ListCard from '../components/cards/ListCard';
import { DailyActivity } from '../components/activity/dailyactivity';
import DownComponent from '../components/DownComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.rootContainer}>
        <LinearGradient style={styles.rootContainer} colors={[Colors.screen_p,Colors.screen_s]}>
            <View style={styles.rootContainer}>
            {/* <View style={styles.iconHolder}>
                <BackIcon name='chevron-thin-left' color={Colors.white} size={30} />
            </View> */}
            <View style={styles.topHolder}>
                <View>
                    <Text style={styles.nameTitle}>Hi, Sherlock</Text>
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.imgcircle}>
                        <Image source={require('../assets/sherlock.jpeg')} style={{width: 30, height: 50, resizeMode:'contain'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.amountHolder}>
                <TouchableOpacity style={styles.amtbutton} onPress={() => navigation.navigate('balance')}>
                    <Text style={styles.amtTitle}>Balance</Text>
                    <Text style={styles.amtValue}><Text style={styles.rupee}>₹{' '}</Text>20,000.10</Text>
                </TouchableOpacity>
                <View style={styles.seperator} />
                <TouchableOpacity style={styles.amtbutton} onPress={() => navigation.navigate('expenses')}>
                    <Text style={styles.amtTitle}>Expenses</Text>
                    <Text style={styles.amtValue}><Text style={styles.rupee}>₹{' '}</Text>45,000.36</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.totalHolder} onPress={() => navigation.navigate('recentactivity')}>
                <View>
                    <Text style={styles.totalInText}>Total Income</Text>
                    <Text style={styles.totalInDate}><Text style={styles.totalInDateText}>Upto</Text> 25th Jul 2023</Text>
                </View>
                <View>
                    <Text style={styles.totalamt}>₹65,000.44</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.activityctn}>
                <Text style={styles.ractivity}>Recent Activity</Text>
                <Text style={styles.seeall}>See all</Text>
            </View>

            <FlatList 
                data={DailyActivity}
                key={(item) => item.title}
                ListFooterComponent={
                    <View style={{margin: 50}} />
                }
                renderItem={({item,index}) => {
                    return(
                        <ListCard id={index} source={item.icon} title={item.title} tag={item.tag} payment={item.payment} amount={item.amount} date={item.date} />
                    )
                }}
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.sideBtn, styles.sideRBtn]} onPress={() => navigation.navigate('expensessource')}>
                    <Icon name='arrow-top-right' size={24} color={Colors.white} />
                </TouchableOpacity>  
                <TouchableOpacity style={[styles.sideBtn, styles.sideLBtn]} onPress={() => navigation.navigate('incomesource')}>
                    <Icon name='arrow-bottom-left' size={24} color={Colors.white} />
                </TouchableOpacity>  
            </View>            
            </View>
            <DownComponent navigation={navigation} />
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    iconHolder: {
        paddingLeft: 8,
        paddingTop: 8,
    },
    topHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
    },
    nameTitle: {
        fontSize: 30,
        color: Colors.white
    },
    imgcircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    amountHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 3,
    },
    amtbutton: {
        padding: 6,
        width: '44%',
        borderRadius: 12,
        backgroundColor: Colors.primary
    },
    seperator: {
        margin: 5,
    },
    amtTitle: {
        color: Colors.white,
        fontSize: 16,
        textAlign: 'center',
    },
    amtValueHdr: {
        //flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    rupee: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '300',
    },
    amtValue: {
        paddingTop: 5,
        color: Colors.white,
        fontSize: 26,
        fontWeight: '300',
        textAlign: 'center',    
    },
    totalHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 16,
        marginHorizontal: 20,
        borderRadius: 12,
        backgroundColor: Colors.primary,
    },
    totalInText: {
        color: Colors.white,
    },
    totalInDateText: {
        color: Colors.darkGrey,
    },
    totalInDate: {
        color: Colors.steellightblue,
    },
    totalamt: {
        fontSize: 20,
        fontWeight: '300',
        color: Colors.white,
    },
    activityctn: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    ractivity: {
        fontSize: 15,
        fontWeight: '300',
        color: Colors.white,
    },
    seeall:{
        fontSize: 15,
        color: Colors.grey,
    },
    sideBtn: {
        elevation: 10,
        alignItems:'center',
        justifyContent:'center',
        width: 80,
        position: 'absolute',                                          
        bottom: 0,                                                    
        height: 60,
        backgroundColor: '#364160',
    },
    sideLBtn: {
        left: 0,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    sideRBtn: {
        right: 0,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
});

export default HomeScreen;
