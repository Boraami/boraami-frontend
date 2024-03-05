import React from 'react';
import { useColorScheme } from 'react-native';
import { XStack, View, YStack, Text } from 'tamagui';
import { FontAwesome, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import Icon from '../Alert/Icon';

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
};

export const Success = ({ shade }: Props) => {
    const colorScheme = useColorScheme();

    // const iconColor =
    // shade === 'solid'
    //     ? colorScheme === 'dark'
    //         ? '$butter.50'
    //         : '$butter.50'
    //     : shade === 'subtle'
    //     ? colorScheme === 'dark'
    //         ? '$singularity.500'
    //         : '$singularity.500'
    //     : colorScheme === 'dark' && shade === 'outline'
    //     ? '$singularity.200'
    //     : '$singularity.500';
    
    // let solid = shade === 'solid';
    // let subtle = shade === 'subtle';
    // let outline = shade === 'outline';

    return (
        <YStack>
            <View style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }}
                backgroundColor={ shade === 'solid' ? '$success-alert-solid-fill' : shade === 'subtle' ? '$success-alert-subtle-fill' : '$success-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$success-alert-solid-fill' : shade === 'subtle' ? '$success-alert-subtle-fill' : '$success-alert-outline'}
                borderWidth={1} 
            >
        
            <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 

            {/* Tried the following: */}
                {/* <Icon
                    name='check-circle'
                    color={colorScheme === 'dark' ? '$butter.50' : '$boraami.700' }
                    size={14} 
                    style={{ paddingTop: 4 }}
                />*/}

                {/* Success Check Icon:
                Light & Solid: white
                Light & Subtle: green
                Light & Outline: green
                Dark & Solid: white 
                Dark & Subtle: green
                Dark & Outline: lightgreen */}
                
                <FontAwesome6 name="circle-check" size={24}   color={
                    colorScheme === 'dark' && shade === 'solid' ? '$butter.50' :
                    colorScheme === 'light' && shade === 'solid' ? '$butter.50' :
                    colorScheme === 'dark' && shade === 'subtle' ? '$singularity.500' :
                    colorScheme === 'light' && shade === 'subtle' ? '$singularity.500' :
                    colorScheme === 'dark' && shade === 'outline' ? '$singularity.200' :
                    colorScheme === 'light' && shade === 'outline' ? '$singularity.500' :
                    '$butter.50'
                }/>

                <FontAwesome // Appears but no color change
                    name="close" 
                    size={24} 
                    // color={colorScheme === 'dark' && solid ? '$butter.50'|| 'light' && solid ? '$boraami.700' }
                    color={
                        colorScheme === 'dark' && shade === 'solid' ? '$butter.50' :
                        colorScheme === 'light' && shade === 'solid' ? '$butter.50' :
                        colorScheme === 'dark' && shade === 'subtle' ? '$singularity.500' :
                        colorScheme === 'light' && shade === 'subtle' ? '$singularity.500' :
                        colorScheme === 'dark' && shade === 'outline' ? '$singularity.200' :
                        colorScheme === 'light' && shade === 'outline' ? '$singularity.500' :
                        '$butter.50'
                    }/>

                <AntDesign
                    name="close" 
                    size={24} 
                    color={
                        colorScheme === 'dark' && shade === 'solid' ? '$butter.50' :
                        colorScheme === 'light' && shade === 'solid' ? '$butter.50' :
                        colorScheme === 'dark' && shade === 'subtle' ? '$singularity.500' :
                        colorScheme === 'light' && shade === 'subtle' ? '$singularity.500' :
                        colorScheme === 'dark' && shade === 'outline' ? '$singularity.200' :
                        colorScheme === 'light' && shade === 'outline' ? '$singularity.500' :
                        '$butter.50'
                    }/>

                <XStack width={250} flexDirection='column'>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$success-alert-solid-text' : shade === 'subtle' ? '$success-alert-subtle-text' : '$success-alert-outline-text'}
                        fontSize={14}>Selection successfully moved!
                    </Text>        
                </XStack>
            </XStack>
                {/* <Icon
                    name='close' //FontAwesome
                    // name='check-circle' //FontAwesome6
                    color={iconColor}
                    size={14} 
                    style={{ paddingTop: 4 }}
                />  */}
        </View>
    </YStack>
)}

