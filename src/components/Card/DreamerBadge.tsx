import React from 'react'
import { Card, styled, Text, Image  } from 'tamagui';

const DreamerBadge = styled(Card, {
    backgroundColor: '$boraami.100',
    justifyContent: 'space-between',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    height: 87,
    width: 329, 
});

type DreamerBadgeProps = {
    text: string,
    uri: string;
    boldText?: string, 
}
    
export const DreamerBadgeCard = ({ text, uri, boldText }: DreamerBadgeProps) => {
    return (
    <DreamerBadge style={{ flexDirection: "row", justifyContent: 'center', width: 278, height: 87,fontWeight: 'bold' ? boldText : '400' }}>
            <Image source={{ uri: uri,  width: 48, height: 48}}/>
            <Text style={{ padding: 12 }}>{text}</Text>
        {/* </View> */}
    </DreamerBadge>
)};


