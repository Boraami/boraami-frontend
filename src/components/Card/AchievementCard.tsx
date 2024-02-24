import React from 'react'
import { Card, styled, Text, Image, View  } from 'tamagui';

const Achievement = styled(Card, {
    backgroundColor: '$info-card-fill',
    justifyContent: 'space-between',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
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
    <Achievement>
        <View style={{ flexDirection: 'row', width: 278, height: 87, alignContent: 'center', paddingHorizontal: 25 }}>
            <View style={{ marginTop: 17 }}>
                <Image source={{ uri: uri,  width: 48, height: 48} }/>
            </View>
            <Text fontSize={14} style={{ padding: 12 }}>{text}</Text>
        </View>
    </Achievement>
)};


