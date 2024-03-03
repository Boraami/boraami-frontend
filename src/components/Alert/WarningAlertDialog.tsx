import React from 'react';
import { AlertDialog, Separator, View, Text, Button, XStack, YStack } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    title: string;
    content: string;
    boldText: string;
};

export const WarningAlertDialog = ({ title, content, boldText }: Props) => {
    return (
        <AlertDialog>
            <AlertDialog.Content>
            <YStack backgroundColor={'$error-alert-fill'} borderColor={'$error-alert-outline'} style={{ color: '$error-alert-title-text'}} borderRadius={8} width={330} borderWidth={2}>
                <View style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between'}}>
                    <AlertDialog.Title fontFamily={'$heading'} fontSize={16} color={'$error-alert-title-text'}>{title}</AlertDialog.Title >
                    <AntDesign name="close" size={24} style={{ color: '$error-alert-title-text'}} />                
                </View>
                <Separator borderColor={'$error-alert-outline'}/>
            {/* AlertDialog.Description changes the lineHeight  */}
                <View style={{ width: '100%', padding: 16 }}>
                    <Text color='$error-alert-title-text' fontSize={14} >{content}
                    <Text color='$bwl.700' fontSize={14}>{' '}{boldText}
                    <Text color='$error-alert-title-text' fontWeight='800' fontSize={14} >.</Text></Text></Text>
                </View>
                <Separator borderColor={'$error-alert-outline'}/>
                <XStack justifyContent='flex-end'>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>    
                    <AlertDialog.Cancel asChild>
                        <Button 
                            style={{ color: '$error-alert-title-text'}} 
                            fontFamily={'$btn'} 
                            fontSize={14}>Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <Button 
                            style={{ color: '$butter.50'}} 
                            fontFamily={'$btn'} 
                            fontSize={14} 
                            height={30} 
                            // width={190}

                            justifyContent='center'
                            alignItems='center'
                            backgroundColor={'$default-alert-solid-fill'} 
                            borderRadius={4}
                          >I understand. Delete.
                        </Button>
                    </AlertDialog.Action>
               
                </View>
                </XStack>
            </YStack>
            </AlertDialog.Content>
        </AlertDialog>
    )}

