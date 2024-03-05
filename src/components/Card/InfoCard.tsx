import React from 'react'
import { useColorScheme } from "react-native";
import { Card, styled, View, XStack, Text, Image } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { colorScheme } from "../../themes/theme";

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
    const theme = useColorScheme();
    
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
        <XStack style={{ flexGrow: 1, padding: 8, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: "row"}}>
                        <Entypo 
                            name="spotify" 
                            paddingTop={2} 
                            size={iconSize} 
                            color={theme === 'dark' ? colorScheme.butter[50] : colorScheme.boraami[700]}    
                        />
                        <Text paddingLeft={4} fontSize={textSize} color="$info-card-text" fontFamily="$heading" >{title}</Text>
                    </View> 
                    <Text color="$info-card-text" paddingTop={4} fontSize={subTextSize} >{subtitle}</Text>
                </View>
                <View style={{ paddingTop: 4}}>
                    <AntDesign 
                        name="close" 
                        size={closeSize} 
                        color={theme === 'dark' ? colorScheme.butter[50] : colorScheme.boraami[700]}    
                    />
                </View>
        </XStack> 
    </Info>
)};



