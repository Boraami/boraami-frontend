import React from 'react';
import { View, TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import { AlertDialog, Button, styled } from 'tamagui';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Banner = styled(AlertDialog, {
    width: '100%',
    borderWidth: 5,  
    backgroundColor: '$bg-brand-strong',
    borderRadius: "$r-subtle",
    alignSelf: "center",
    borderLeftColor: '$border-brand-subtle',
    display: 'flex', 
    flexDirection: 'row',
});

type Props = {
    title: string;
    content: string;
};


export const AlertBanner = ({ title, content }: Props) => {
    return (
    <Banner>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Entypo name="heart" size={20} color="black" />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'Poppins', fontSize: '30'}}>{title}</Text>
                <Text style={{ fontFamily: 'Poppins', fontSize: '20'}}>{content}</Text>
            </View>
            <AntDesign name="close" size={20} color="black" />
        </View>
        <View style={{ width: '100%', padding: 16 }}>
            <Text>{content}</Text>
        </View>
    </Banner>
    )}
