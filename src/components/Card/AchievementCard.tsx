import React from 'react'
import { Card, styled, Text, Image  } from 'tamagui';

const Achievement = styled(Card, {
    backgroundColor: '$info-card-fill',
    justifyContent: 'space-between',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    height: 87,
    width: 329, 
});

type AchievementProps = {
    uri: string;
    text: string,
    boldText?: string, 
}
    
export const AchievementCard = ({ text, uri, boldText }: AchievementProps) => {
    return (
    <Achievement style={{ flexDirection: "row", justifyContent: 'center', width: 278, height: 87,fontWeight: 'bold' ? boldText : '400' }}>
            <Image source={{ uri: uri,  width: 48, height: 48}}/>
            <Text style={{ padding: 12 }}>{text}</Text>
        {/* </View> */}
    </Achievement>
)};


