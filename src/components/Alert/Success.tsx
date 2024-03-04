import React from 'react';
import { useColorScheme } from 'react-native';
import { XStack, View, YStack, Text } from 'tamagui';
import Icon from '../Alert/Icon';

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
};

export const Success = ({ shade }: Props) => {
    const colorScheme = useColorScheme();

    const iconColor =
    shade === 'solid'
        ? colorScheme === 'dark'
            ? '$butter.50'
            : '$butter.50'
        : shade === 'subtle'
        ? colorScheme === 'dark'
            ? '$singularity.500'
            : '$singularity.500'
        : colorScheme === 'dark' && shade === 'outline'
        ? '$singularity.200'
        : '$singularity.500';
    
    return (
        <YStack>
            <View style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }}
                backgroundColor={ shade === 'solid' ? '$success-alert-solid-fill' : shade === 'subtle' ? '$success-alert-subtle-fill' : '$success-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$success-alert-solid-fill' : shade === 'subtle' ? '$success-alert-subtle-fill' : '$success-alert-outline'}
                borderWidth={1} 
            >
            
            <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 

            {/* Change from AntDesign's 'checkcircleo' icon: circle is now green with 'subtle instead  */}

                <Icon
                    name='check-circle'
                    color={iconColor}
                    size={14} 
                    borderColor='red'
                    borderWidth ={2}
                    style={{ paddingTop: 4 }}
                /> 
         
                <XStack width={250} flexDirection='column'>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$success-alert-solid-text' : shade === 'subtle' ? '$success-alert-subtle-text' : '$success-alert-outline-text'}
                        fontSize={14}>Selection successfully moved!
                    </Text>        
                </XStack>
            </XStack>
                <Icon
                    // name='close'
                    name='check-circle' //FontAwesome6
                    color={iconColor}
                    size={14} 
                    borderColor='red'
                    borderWidth ={2}
                    style={{ paddingTop: 4 }}
                /> 
        </View>
    </YStack>
)}

