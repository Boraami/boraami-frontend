import React from 'react';
import { useColorScheme } from "react-native";
import { XStack, YStack, View, SizableText, Text, Dialog, styled, Button } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { colorScheme } from "../../themes/theme";

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
    name: 'default' | 'success' | 'warning',
    leftIcon: string,
    leftIconColor: string,
    closeIconColor: string,
    alert: string
};


const StyledAlert = styled(View, {
    variants: {
        variant: {
            'success.solid': {
                backgroundColor: "$success-alert-solid-fill",
                color: "$success-alert-solid-text",
                // leftIcon: "success",
                // leftIconColor: "success-alert-solid-icon",
                // closeIconColor: "success-alert-solid-close-icon",
           },
            'success.subtle': {
                backgroundColor: "$success-alert-subtle-fill",
                color: "$success-alert-subtle-text",
                // leftIcon: "success",
                // leftIconColor: "success-alert-subtle-icon",
            },
            'success.outline': {
                backgroundColor: '$success-alert-outline-fill',
                borderColor: '$success-alert-outline-fill',
                borderWidth: 1,
                color: '$success-alert-outline-text',
                // leftIcon: 'success',
                // leftIconColor: 'success-alert-outline-icon',
                // closeIconColor: 'success-alert-outline-close-icon',
            },
            'default.solid': {
                backgroundColor: '$default-alert-solid-fill',
                color: '$default-alert-solid-text',
                // leftIcon: 'heart',
                // leftIconColor: 'default-alert-solid-icon',
                // closeIconColor: 'default-alert-solid-close-icon',
             },
            'default.subtle': {
                backgroundColor: '$default-alert-subtle-fill',
                color: '$default-alert-subtle-text',
                // leftIcon: 'heart',
                // leftIconColor: 'default-alert-subtle-icon',
                // closeIconColor: 'default-alert-subtle-close-icon',
            },
            'default.outline': {
                backgroundColor: '$default-alert-outline-fill',
                borderColor: '$default-alert-outline-fill',
                borderWidth: 1,
                color: '$default-alert-outline-text',
                // leftIcon: 'heart',
                // leftIconColor: 'default-alert-outline-icon',
                // closeIconColor: 'default-alert-outline-close-icon',
            },
            'warning.solid': {
                backgroundColor: '$warning-alert-solid-fill',
                color: '$error-alert-solid-text',
                // leftIcon: 'warning',
                // leftIconColor: '$error-alert-solid-icon',
                // closeIconColor: '$error-alert-solid-close-icon',
            },
            'warning.subtle': {
                backgroundColor: '$warning-alert-subtle-fill',
                color: '$warning-alert-subtle-text',
                // leftIcon: '$warning',
                // leftIconColor: '$warning-alert-subtle-icon',
                // closeIconColor: '$warning-alert-subtle-close-icon',
            },
            'warning.outline': {
                backgroundColor: '$warning-alert-outline-fill',
                color: '$warning-alert-outline-text',
                // leftIcon: '$warning',
                // leftIconColor: '$warning-alert-outline-icon',
                // closeIconColor: '$warning-alert-outline-close-icon',
            },
        },
    },
});

export const ShortAlert = ({ shade, name, alert, closeIconColor, leftIconColor }: Props) => {
     const theme = useColorScheme();
    //  let solid = shade === 'solid'
    //  let subtle = shade === 'subtle'

    // const closeIconColor = () => {}

    return (
        <StyledAlert variant={`${name}.${shade}`}>

         <Text>{alert}</Text>

                <AntDesign 
                name='close'
                size={16} 
                color={
                    theme === 'dark' && shade === 'solid' ? colorScheme.butter[50] :
                    theme === 'dark' && shade === 'subtle' ? colorScheme.singularity[500] :
                    theme === 'dark' && shade === 'outline' ? colorScheme.singularity[200] :
                    theme === 'light' && shade === 'solid' ? colorScheme.butter[50] :
                    colorScheme.singularity[500]
                }
                />
        </StyledAlert>
    
//           <Dialog modal>
//              <StyledAlert/>
//               <DialogContent> 
//           <YStack>
//              <XStack style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }} 
                 
//                   backgroundColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-outline-fill'}
//                   borderColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-solid-fill'}
//                   borderWidth={1} 
//              >
//              <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 
//                  <AntDesign  
//                       name={ name === 'short' ? 'heart' : 'warning' }
//                       name={'heart'} 
//                      paddingHorizontal={4} 
//                      size={14} 
//                      color={leftIconColor}
//                       color={ 
//                           theme === 'dark' && ( subtle ? colorScheme.boraami[700] : colorScheme.butter[50] ) || (theme === 'light' && solid ? colorScheme.butter[50] : colorScheme.boraami[700] )}    
//                      paddingTop={4}
//                  />
//                  <XStack width={250} flexDirection='column'>
//                      <Text 
//                          fontFamily={'$body'} 
//                          color={''}
//                           color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
//                          fontSize={14}>{alert}</Text>        
//                  </XStack>
//              </XStack>
//              <Dialog.Close displayWhenAdapted asChild>
//                  <Button marginRight={10} borderColor={'red'} borderWidth={4}>
//                  <AntDesign 
//                  marginRight={10} borderColor={'orange'} borderWidth={4}
//                      name='close'
//                      size={16} 
//                      color={closeIconColor}
//                   color={ theme === 'dark' && ( subtle ? colorScheme.boraami[700] : colorScheme.butter[50] ) || (theme === 'light' && solid ? colorScheme.butter[50] : colorScheme.boraami[700] )}    
//                  />
//                  </Button>
//              </Dialog.Close>
//          </XStack>
//      </YStack>
//       </DialogContent>
//  </Dialog> 

)}
