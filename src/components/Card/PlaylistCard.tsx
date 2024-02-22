import React from 'react'
import { Card, styled, View, Text, Image  } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Playlist = styled(Card, {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderColor: '$border-error-subtle',
    borderTopWidth: 5,
    borderTopColor: '$text-brand',
    backgroundColor: '$boraami.100',
    borderRadius: "$r-subtle",
    alignSelf: "center",
    display: 'flex', 
    flexDirection: 'row',
    margin: 20,
    height: 110,
    width: 329, 
});

type PlaylistProps = {
    title: string;
    subtitle: string;
    uri: string;
    size?: 'md' | 'sm'; 
}
    
export const PlaylistCard = ({ title, subtitle, uri, size='md' }: PlaylistProps) => {
    return (
    <Playlist>
        <View style={{ padding: 4}}>
        <Image source ={{ uri: uri, width: size==='md' ? 115 : 64, height: size==='md' ? 98 : 64 }}/>
        </View>
        <View style={{ flexGrow: 1, padding: 8 }}>
            <View style={{ flexDirection: "row" }}>
                <Entypo name="spotify" size={24} color="black" />
                <Text style={{ fontFamily: 'Poppins', fontSize: 20}}>{title}</Text>
            </View> 
            <Text>{subtitle}</Text>
        </View> 
        <AntDesign name="close" size={16} color="black" margin={10}/>
    </Playlist>
)};



