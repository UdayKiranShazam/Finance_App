import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react';
import TopHeader from '../components/header/TopHeader';
import LinearGradient from 'react-native-linear-gradient';
import DownComponent from '../components/DownComponent';
import { Colors } from '../constants/Colors';

const IncomeSourceScreen = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
        <LinearGradient style={styles.rootContainer} colors={[Colors.screen_p,Colors.screen_s]}>
            <View style={styles.rootContainer}>
                <TopHeader onPress={() => navigation.navigate('homescreen')} />
                <View style={styles.emojiHolder}>
                    <TouchableOpacity style={styles.emoji}>
                    </TouchableOpacity>
                    <Text style={styles.infoText}>Add a Emoji</Text>
                </View>
                <View style={{margin: 20}} />
                <View style={styles.holder}>
                    <Text style={styles.question}>What is the income or Source?</Text>
                    <TextInput 
                        style={styles.input}
                        keyboardType='default'
                        editable={false}
                    />

                    <Text style={styles.question}>How much it is?</Text>
                    <TextInput 
                         editable={false}
                        style={styles.input}
                        keyboardType='default'
                    />
                </View>
                <View style={styles.dateTagHolder}>
                    <View style={styles.dateHolder}>
                        <Text style={styles.question}>Date</Text>
                        <TextInput style={styles.tag}
                             editable={false}
                        />
                    </View>
                    <View style={styles.dateHolder}>
                        <Text style={styles.question}>Tags</Text>
                        <TextInput style={styles.tag}
                            editable={false}
                        />
                    </View>
                </View>
            </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.saveBtn}>
                        <Text style={styles.btntext}>Save</Text>
                    </TouchableOpacity>
                </View>
            <DownComponent navigation={navigation} />
        </LinearGradient>
    </View>
  )
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    emojiHolder: {
        marginTop: 20,
        alignItems: 'center'
    },
    emoji: {
        width: 90,
        height: 90,
        alignItems: 'center',
        borderRadius: 16,
        elevation: 0,
        backgroundColor: '#364160'
    },
    infoText: {
        paddingTop: 3,
        color: '#9BA6CA',
        fontSize: 16,
        textAlign: 'center',
    },
    holder: {
        marginHorizontal: 20,
    },
    question: {
        fontSize: 16,
        color: '#9BA6CA'
    },
    input: {
        width: '99%',
        padding: 10,
        fontSize: 18,
        color: Colors.white,
        marginTop: 3,
        marginBottom: 25,
        borderRadius: 12,
        backgroundColor: '#364160',
    },
    dateTagHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    dateHolder: {
        width: '50%',
    },
    dateText: {
        fontSize: 16,
        color: '#9BA6CA'
    },
    tag: {
        width: '96%',
        padding: 10,
        fontSize: 18,
        color: Colors.white,
        marginTop: 3,
        marginBottom: 25,
        borderRadius: 12,
        backgroundColor: '#364160',
    },
    saveBtn:{
        width: '60%',
        borderRadius: 30,
        alignItems: 'center',
        padding: 14,
        elevation: 5,
        backgroundColor: '#212D50'
    },
    btntext: {
        color: '#9BA6CA',
        fontSize: 14,
    },
});

export default IncomeSourceScreen;