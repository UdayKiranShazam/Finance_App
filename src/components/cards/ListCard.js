import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed';
import { Colors } from '../../constants/Colors';

const ListCard = ({id,source,title,tag,payment,amount,date}) => {
  return (
    <Card key={id} containerStyle={styles.card}>
        <View style={styles.viewCtn}>
            <View style={{width: 35, height: 30,}}>
                <Image source={source} style={styles.image} />
            </View>
            <View style={{marginLeft: 14, width: '100%'}}>
                <View style={styles.container}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.tag}>Tag{' : '}<Text>{tag}</Text></Text>
                </View>
                <View style={styles.container}>
                        <View style={styles.innCtn}>
                            <Text style={styles.tag}>{payment}{' '}</Text>
                            <Text style={{fontSize: 16, fontWeight: '600', color: payment === 'Sent' ? Colors.darkpink : Colors.seagreen}}>{amount}</Text>
                        </View>
                        <Text style={styles.dateTag}>Date{' '}<Text style={styles.date}>{date}</Text></Text>
                </View>
            </View>
        </View>
    </Card>
  )
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        borderRadius: 10,
        width: '90%',
        padding: 4,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: Colors.primary
    },
    viewCtn: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 6,
        //backgroundColor: Colors.cornflowerblue
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        //elevation: 10,
    },
    container: {
        width: '84%',
        marginVertical: 2,
        flexDirection: 'row',
        //backgroundColor: Colors.black,
        justifyContent: 'space-between',
    },
    title:{
        color: Colors.grey,
        fontSize: 18,
    },
    tag: {
        color: Colors.grey,
        fontSize: 16,
    },
    innCtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateTag: {
        fontSize: 16,
        color: Colors.darkGrey,
    },
    date: {
        fontSize: 16,
        color: Colors.grey,
    },
});

export default ListCard;