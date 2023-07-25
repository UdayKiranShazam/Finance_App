import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, {useState} from 'react';
import { Colors } from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import DownComponent from '../components/DownComponent';
import TopHeader from '../components/header/TopHeader';
import ListCard from '../components/cards/ListCard';
import { Image } from '@rneui/base';
import { Avatar } from '@rneui/themed';

const TasksScreen = ({navigation}) => {

    const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.rootContainer}>
        <LinearGradient style={styles.rootContainer} colors={[Colors.screen_p,Colors.screen_s]}>
            <View style={styles.rootContainer}>
                <View style={styles.topHolder}>
                    <Text style={styles.title}>
                        Your Tasks
                    </Text>
                    <View style={styles.imgcircle}>
                        <Image source={require('../assets/sherlock.jpeg')} style={{width: 30, height: 50, resizeMode:'contain'}} />
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={{fontSize: 16, color: '#D9D9D9', fontWeight: '300',paddingBottom: 12}}>On Going Tasks</Text>
                    <View style={{borderBottomWidth: 0.5, borderBottomColor: '#D9D9D9'}} />
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                        <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 2 ,borderColor: '#D9D9D9'}} />
                        <Text style={{fontSize: 16, color: '#D9D9D9',paddingLeft: 10}}>Adding Podcast Section</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 12}}>
                        <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 2 ,borderColor: '#D9D9D9'}} />
                        <Text style={{fontSize: 16, color: '#D9D9D9',paddingLeft: 10}}>Mind map View Design</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={{fontSize: 16, color: '#D9D9D9', fontWeight: '300',paddingBottom: 12}}>Done Tasks</Text>
                    <View style={{borderBottomWidth: 0.5, borderBottomColor: '#D9D9D9'}} />
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 12}}>
                        <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 2 ,borderColor: '#D9D9D9'}} />
                        <Text style={{fontSize: 16, color: '#D9D9D9',paddingLeft: 10,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} >Onefitness app Design</Text>
                    </View>
                </View>
            </View>
                <TouchableOpacity style={[styles.sideBtn]} onPress={() => setShowModal(true)}>
                    <Icon name='add' size={24} color={Colors.white} />
                </TouchableOpacity> 
            <DownComponent navigation={navigation} />
        </LinearGradient>
        <Modal
            visible={showModal}
            transparent={true}
            animationType='slide'
            onRequestClose={() => setShowModal(false)}
        >
            <Pressable onPress={(e) => e.target == e.currentTarget && setShowModal(false)} style={{flex: 1, justifyContent: 'flex-end',marginBottom: '28%'}}>
                <View style={styles.container}>
                    <Text style={{fontSize: 16, color: '#D9D9D9', fontWeight: '300',paddingBottom: 12}}>Done Tasks</Text>
                    <View style={{borderBottomWidth: 0.5, borderBottomColor: '#D9D9D9'}} />
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginBottom: 12}}>
                        <Text style={{fontSize: 16, color: '#D9D9D9',paddingLeft: 10}} >Mind map View Design</Text> 
                        <Pressable onPress={() => setShowModal(false)} style={{borderRadius: 30, borderWidth: 1,borderColor: '#D9D9D9', padding: 8, paddingHorizontal: 16}}>
                            <Text style={{fontSize: 14, color: '#D9D9D9',}}>Add</Text>
                        </Pressable>
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
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        color: '#D9D9D9',
        fontWeight: '300',
    },
    imgcircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 6,
        backgroundColor: Colors.primary,
    },
    sideBtn: {
        elevation: 10,
        alignItems:'center',
        justifyContent:'center',
        width: 80,
        position: 'absolute',                                          
        bottom: '15%',                                                    
        height: 50,
        width: 50,
        right: 20,
        borderRadius: 50,
        backgroundColor: Colors.primary,
    },
});

export default TasksScreen