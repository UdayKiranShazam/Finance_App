import { View, Text, StyleSheet, FlatList, Image, Modal, Pressable } from 'react-native'
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import DownComponent from '../components/DownComponent';
import TopHeader from '../components/header/TopHeader';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
  return (
    <View style={styles.rootContainer}>
        <LinearGradient style={styles.rootContainer} colors={[Colors.screen_p,Colors.screen_s]}>
            <View style={styles.rootContainer}>
                <TopHeader text={'Logout'} onPress={() => navigation.navigate('homescreen')} />
                <View style={{alignItems: 'center'}}>
                    <View style={styles.imgcircle}>
                            <Image source={require('../assets/sherlock.jpeg')} style={{width: 90, height: 90, resizeMode:'cover'}} />
                    </View>
                    <Text style={{fontSize: 20, color: Colors.white, paddingTop: 20}}>Sherlock Holmes</Text>
                    <Text style={{fontSize: 14, color: '#9BA6CA', paddingTop: 10}}>Email id : bakerstreet268@gmail.com</Text>
                </View>
                <View style={{marginHorizontal: 20, marginTop: 40}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 18, color: '#9BA6CA'}}>My Tags</Text>
                        <View style={{backgroundColor: '#364160', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 30}}>
                            <Text style={{fontSize: 14, color: '#9BA6CA'}}>Add new</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#364160', padding: 6,marginTop: 12, borderRadius: 8, marginHorizontal: 0}}>
                        <View style={{backgroundColor: Colors.primary, width: '98%', borderRadius: 30, padding: 6, paddingHorizontal: 12}}>
                            <Text style={{fontSize: 15, color: '#9BA6CA'}}>NEFT</Text>
                        </View>
                        <Text style={{fontSize: 18, color: '#9BA6CA',paddingLeft: 10, padding: 4,}}>IMPS</Text>
                        <Text style={{fontSize: 18, color: '#9BA6CA',paddingLeft: 10, padding: 4,}}>UPI</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: 20, justifyContent: 'space-between', marginTop: 30}}>
                    <Pressable onPress={() => setShowModal(true)} style={{flexDirection: 'row', alignItems: 'center', borderRadius: 40, backgroundColor: '#364160', padding: 10, paddingHorizontal: 20}}>
                        <Text style={{fontSize: 16, color: '#9BA6CA'}}>About App</Text>
                        <Icon name='information-circle-outline' color={'#9BA6CA'} size={20} style={{paddingLeft: 10}}/>
                    </Pressable>
                    <Pressable onPress={() => setShowModal1(true)} style={{flexDirection: 'row', alignItems: 'center', borderRadius: 40, backgroundColor: '#364160', padding: 10, paddingHorizontal: 20}}>
                        <Text style={{fontSize: 16, color: '#9BA6CA'}}>Support</Text>
                        <Icon name='headset' color={'#9BA6CA'} size={20} style={{paddingLeft: 10}} />
                    </Pressable>
                </View>
            </View>
            <DownComponent navigation={navigation} />
        </LinearGradient>
        <Modal
            visible={showModal}
            transparent={true}
            animationType='slide'
            onRequestClose={() => setShowModal(false)}
        >
            <Pressable onPress={(e) => e.target == e.currentTarget && setShowModal(false)} style={{flex: 1, justifyContent: 'center'}}>
                <View style={styles.container}>
                    <Text style={{fontSize: 18, color: '#D9D9D9', fontWeight: '300',paddingBottom: 12, textAlign: 'center'}}>Information</Text>
                    <Text style={{fontSize: 16, color: '#9BA6CA', paddingLeft: 6,paddingBottom: 5}}>About 37Dev app.</Text>
                    <View style={{backgroundColor: '#364160', borderRadius: 8, padding: 6}}>
                        <Text style={{fontSize: 14, color: '#9BA6CA'}}>
                            This app is built to help you manage your finances and daily tasks with ease
                        </Text>
                    </View>

                    <Text style={{fontSize: 16, color: '#9BA6CA', paddingLeft: 6,paddingBottom: 5, paddingTop: 20}}>Team</Text>
                    <View style={{backgroundColor: '#364160', borderRadius: 8, padding: 6}}>
                        <Text style={{fontSize: 14, color: '#9BA6CA',paddingLeft: 6}}>
                            Uday kiran
                        </Text>
                    </View>
                </View>
            </Pressable>
        </Modal>

        <Modal
            visible={showModal1}
            transparent={true}
            animationType='slide'
            onRequestClose={() => setShowModal1(false)}
        >
            <Pressable onPress={(e) => e.target == e.currentTarget && setShowModal1(false)} style={{flex: 1, justifyContent: 'center'}}>
                <View style={styles.container}>
                    <Text style={{fontSize: 18, color: '#D9D9D9', fontWeight: '300',paddingBottom: 12, textAlign: 'center'}}>Support</Text>
                    <Text style={{fontSize: 16, color: '#9BA6CA', paddingLeft: 6,paddingBottom: 5}}>Team</Text>
                    <View style={{backgroundColor: '#364160', borderRadius: 8, padding: 6}}>
                        <Text style={{fontSize: 14, color: '#9BA6CA', paddingLeft: 2}}>
                            Uday kiran
                        </Text>
                    </View>

                    <Text style={{fontSize: 16, color: '#9BA6CA', paddingLeft: 6,paddingBottom: 5, paddingTop: 20}}>Support</Text>
                    <View style={{backgroundColor: '#364160', borderRadius: 8, padding: 6, flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name='mail-outline' size={20} color={'#9BA6CA'} style={{paddingRight: 10}} />
                        <Text style={{fontSize: 14, color: '#9BA6CA',paddingLeft: 6}}>
                            udaykiran@gmail.com
                        </Text>
                    </View>
                </View>
            </Pressable>
        </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    iconHolder: {
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingTop: 8,
    },
    topHolder: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgcircle: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
    amountHolder: {
        marginVertical: 20,
        alignItems:'center',
    },
    rupee: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: '300',
    },
    amtValue: {
        paddingTop: 5,
        color: Colors.white,
        fontSize: 35,
        fontWeight: '300',
        textAlign: 'center',    
    },
    paise: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: '300',
    },
    totalInDateText: {
        color: Colors.darkGrey,
    },
    totalInDate: {
        color: Colors.steellightblue,
    },
    container: {
        marginTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.primary,
    },
});

export default ProfileScreen