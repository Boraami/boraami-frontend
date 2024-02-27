import React from 'react'
import { Card, styled, View, Text, Image  } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

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
    width: 329, 
});

type InfoProps = {
    title: string;
    subtitle: string;
    uri: string;
    size?: 'l' | 's'; 
    textSize: number,
    spotifySize: number,
    closeSize: number, 
    subtextSize: number,
}
    
export const InfoCard = ({ title, subtitle, uri, size, textSize, spotifySize, closeSize, subtextSize }: InfoProps) => {
    return (
    <Info style={{ height: size==='l' ? 110 : 76 }}>
        <View style={{ padding: 4}}>
            <Image borderRadius={4} borderWidth={1} borderColor="$mono.50" source ={{ uri: uri, width: size==='l' ? 115 : 64, height: size==='l' ? 98 : 64 }}/>
        </View>
        <View style={{ flexGrow: 1, padding: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: "row" }}>
                       {/* <SimpleLineIcons name="social-spotify" size={spotifySize} color="#5F3D9C" /> */}
                         <Entypo name="spotify" size={spotifySize} style={{ color: '#5F3D9C' }} />
                        <Text paddingLeft={4} fontSize={textSize} color="$info-card-text" fontFamily="$heading" >{title}</Text>
                    </View> 
                    <Text color="$info-card-text" fontSize={subtextSize} >{subtitle}</Text>
                </View>
                <View style={{ paddingTop: 4}}>
                    <AntDesign name="close" size={closeSize} color="#5F3D9C"/>
                </View>
             </View>
        </View> 
    </Info>
)};



