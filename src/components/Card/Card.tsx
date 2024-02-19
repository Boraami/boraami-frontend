import React from 'react'
import { Card, styled, View, Text, Image  } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const StyledStreamerCard = styled(Card, {
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
});

type StreamerCardProps = {
    title: string;
    subtitle: string;
    uri: string;
    size?: 'md' | 'sm'; 
}

const StyledBadgeCard = styled(Card, {
    backgroundColor: '$boraami.100',
    justifyContent: 'space-between',
    alignSelf: 'center',
    display: 'flex',
});

type BadgeCardProps = {
    text: string,
    uri: string;
}
    
export const StreamerCard = ({ title, subtitle, uri, size='md' }: StreamerCardProps) => {
    return (
    <StyledStreamerCard>
        {/* <Image source ={{ uri, width, height }}/> */}
        <View style={{ padding: 4}}>
        <Image source ={{ uri: uri, width: size==='md' ? 200 : 125, height: size==='md' ? 175 : 115 }}/>
        </View>
        <View style={{ flexGrow: 1, padding: 8 }}>
            <View style={{ flexDirection: "row" }}>
                <Entypo name="spotify" size={24} color="black" />
                <Text style={{ fontFamily: 'Poppins', fontSize: 20}}>{title}</Text>
            </View> 
            <Text>{subtitle}</Text>
        </View> 
        <AntDesign name="close" size={16} color="black" margin={10}/>
    </StyledStreamerCard>
)};

export const StreamerBadge = ({ text, uri }: BadgeCardProps) => {
    return (
    <StyledBadgeCard>
        <View style={{ flexDirection: "row", marginHorizontal: 30  }}>
        <Image source={{ uri: "https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg",  width: 48, height: 48 }}/>
        <Text style={{ padding: 12 }}>{text}</Text>
        </View>
    </StyledBadgeCard>
)};


