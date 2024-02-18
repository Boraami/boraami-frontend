import React from 'react'
import { View } from 'react-native';
import { Card, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Just work on light theme
// Don't worry about passing props to Storybook component; just work on static values
// Test components on Expo Go (Android) and XCode (iPhone)

const StyledStreamerCard = styled(Card, {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: '$border-error-subtle',
    borderTopWidth: 5,
    borderTopColor: '$text-brand',
    backgroundColor: '$boraami.100',
    borderRadius: "$r-subtle",
    alignSelf: "center",
    display: 'flex', 
    flexDirection: 'row',
    // font: '$text-primary'
});

type StreamerCardProps = {
    title: string;
    subtitle: string;
    image: string; 
}

const StyledBadgeCard = styled(Card, {
    width: '100%',
    backgroundColor: '$boraami.100',
    justifyContent: 'space-between',
    alignSelf: 'center',
    display: 'flex',
});

type BadgeCardProps = {
    text: string,
    image: string;
}
    
export const StreamerCard = ({ title, subtitle, image }: StreamerCardProps) => {
    return (
    <StyledStreamerCard>
        <img src={image} width="100"/>
        <View style={{ flexGrow: 1, padding: 8 }}>
            <View style={{ flexDirection: "row" }}>
                <Entypo name="spotify" size={24} color="black" />
                <p>{title}</p>
            </View> 
            <p>{subtitle}</p>
        </View> 
        <AntDesign name="close" size={24} color="black"/>
    </StyledStreamerCard>
)};

export const StreamerBadge = ({ text, image }: BadgeCardProps) => {
    return (
    <StyledBadgeCard>
        <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
        <img src={image} width="48"/>
        <p style={{ padding: 12 }}>{text}</p>
        </View>
    </StyledBadgeCard>
)};


