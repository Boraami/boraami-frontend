import React from 'react'
import { View } from 'react-native';
import { Card, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

// Just work on light theme
// Don't worry about passing props to Storybook component; just work on static values
// Test components on Expo Go (Android) and XCode (iPhone)

const CardComponent = styled(Card, {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: '$border-error-subtle',
    borderTopWidth: 5,
    backgroundColor: '$boraami.100',
    borderRadius: "$r-subtle",
    alignSelf: "center",
    display: 'flex', 
    flexDirection: 'row'
});

type Props = {
    title: string;
    subtitle?: string;
    image?: string; 
}
    
export const StyledCard = ({ title, subtitle, image }: Props) => {
    return <CardComponent>
        <img src={image} width="100"/>
        <View style={{ flexGrow: 1, padding: 8}}><p>{title}</p><p>{subtitle}</p></View> 
            <AntDesign name="close" size={24} color="black"/>
        </CardComponent>
};



