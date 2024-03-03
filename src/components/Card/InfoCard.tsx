import React from 'react'
import { Card, styled, View, XStack, Text, Image, SizableText  } from 'tamagui';
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
    width: 329, 
});

type InfoProps = {
    title: string;
    subtitle: string;
    uri: string;
    size?: 'l' | 's'; 
}
    
export const InfoCard = ({ title, subtitle, uri, size }: InfoProps) => {
    
    let textSize;
    let subTextSize;
    let iconSize;
    let closeSize;
    let cardHeight;

    if (size === 'l'){
        textSize = 16;
        subTextSize = 12;
        iconSize = 20;
        closeSize = 16;
        cardHeight = 110;
    } else {
        cardHeight = 76;
        textSize = 12;
        subTextSize = 10;
        iconSize = 12;
        closeSize = 12;
    } 
    
    return (
    <Info style={{ height: cardHeight }}>
        <XStack style={{ padding: 4}}>
            <Image 
                borderRadius={4} 
                borderWidth={1} 
                borderColor="$mono.50" 
                source ={{  
                    uri: uri, 
                    width: size==='l' ? 115 : 64, 
                    height: size==='l' ? 97 : 64 }}
                />
        </XStack>
        <XStack style={{ flexGrow: 1, padding: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: "row" }}>
                       {/* <SimpleLineIcons name="social-spotify" size={spotifySize} color="#5F3D9C" /> */}
                        <Entypo name="spotify" paddingTop={2} size={iconSize} style={{ color: '#5F3D9C' }} />
                        <SizableText paddingLeft={4} fontSize={textSize} color="$info-card-text" fontFamily="$heading" >{title}</SizableText>
                    </View> 
                    <SizableText color="$info-card-text" paddingTop={4} fontSize={subTextSize} >{subtitle}</SizableText>
                </View>
                <View style={{ paddingTop: 4}}>
                    <AntDesign name="close" size={closeSize} color="#5F3D9C"/>
                </View>
             </View>
        </XStack> 
    </Info>
)};



