import React from 'react'
import { Card, styled, View, Text, Image  } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Info = styled(Card, {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderColor: '$border-error-subtle',
    borderTopWidth: 5,
    borderTopColor: '$info-card-top-border',
    backgroundColor: '$info-card-fill',
    borderRadius: "$r-subtle",
    alignSelf: "center",
    display: 'flex', 
    flexDirection: 'row',
    margin: 20,
    height: 110,
    width: 329, 
});

type InfoProps = {
    title: string;
    subtitle: string;
    uri: string;
    size?: 'md' | 'sm'; 
}
    
export const InfoCard = ({ title, subtitle, uri, size='md' }: InfoProps) => {
    return (
    <Info>
        <View style={{ padding: 4}}>
        <Image source ={{ uri: uri, width: size==='md' ? 115 : 64, height: size==='md' ? 98 : 64 }}/>
        </View>
        <View style={{ flexGrow: 1, padding: 8 }}>
            <View style={{ flexDirection: "row" }}>
                <Entypo name="spotify" size={24} color="$info-card-music-icon" />
                <Text fontWeight={"400"} fontFamily={'$body'} fontSize={20} marginTop={2} color="$info-card-text" >{title}</Text>
                {/* <Text style={{ color: '$info-card-text', fontFamily: 'Poppins', fontSize: 20}}>{title}</Text> */}
            </View> 
            <Text color="$info-card-text" >{subtitle}</Text>
        </View> 
        <AntDesign name="close" size={16} color="black" margin={10}/>
    </Info>
)};



