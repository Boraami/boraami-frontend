import React from 'react'
import { Card, styled, Text, Image, View  } from 'tamagui';

const Achievement = styled(Card, {
    backgroundColor: '$info-card-fill',
    borderRadius: "$r-subtle",
    justifyContent: 'space-between',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 87,
    width: 329, 
});

type AchievementProps = {
    uri: string;
    text1: string,
    text2: string,
    boldText?: string, 
}
    
export const AchievementCard = ({ text1, text2, uri, boldText }: AchievementProps) => {
    return (
    <Achievement>
        <View style={{ flexDirection: 'row', width: 278, height: 87, alignContent: 'center', paddingHorizontal: 25 }}>
            <View style={{ marginTop: 17 }}>
                <Image source={{ uri: uri,  width: 48, height: 48} }/>
            </View>
            <Text color={'$achievement-card-text'} fontSize={14} fontFamily={'$body'} style={{ padding: 12 }}>{text1}
                <Text fontSize={14} fontFamily={'$heading'}>{boldText}</Text>
                <Text fontSize={14} fontFamily={'$body'} style={{ padding: 12 }}>{text2}</Text>
            </Text>
        </View>
    </Achievement>
)};


