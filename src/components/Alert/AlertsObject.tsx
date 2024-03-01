import React from 'react';
import { View, Text, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

const Alert = styled(View, {
    display: 'flex', 
    flexDirection: 'column',
    borderRadius: 4,
    backgroundColor: '#5F3D9C',
    paddingVertical: 12,
    width: 329, 
});

type Props = {
    variant: 'default' | 'success' | 'error',
    shade: 'solid' | 'subtle' | 'outline',
    content?: string;
    contentColor?: string;
};

export const Alerts = ({ variant = 'default', shade = 'solid', content, contentColor }: Props) => {

    let leftIcon : 'heart' | 'checkcircleo' | 'warning' = 'heart';
    let lIconColor;
    let rIconColor;
    let bgColor;
    let bdColor; 
    let bdWidth;
    let bdLeftColor;
    let bdLeftWidth;
    let bgIconColor;
    let text;
    let textColor;

    if (variant === 'default'){
        leftIcon = 'heart';
        text = 'We are going live in July!';
        if (shade === 'solid'){
            // bgColor = '$default-alert-solid-fill'
            // bdColor = '$default-alert-left-border'
            // textColor = '$default-solid-text'
            bgColor = '#5F3D9C'
            bdColor = '#5F3D9C'
            textColor = '#FFFEF8'
            bdLeftColor = '#B48BFF'
            lIconColor = '#FFFEF8'
            rIconColor = '#FFFEF8'
            // bdLeftColor = '$default-alert-left-border'
            bdLeftWidth = 4
        }
        if (shade === 'subtle'){
            bgColor = '$default-alert-subtle-fill'
            bdColor = '$default-alert-subtle-fill'
            textColor = '$default-alert-subtle-text'
            // lIconColor = ''
            // rIconColor = ''
            bdLeftColor = '$default-alert-left-border'

            // bgColor = '#F0E8FF'
            // bdColor = '#F0E8FF'
            // textColor = '#322A41'
            lIconColor = '#5F3D9C'
            rIconColor = '#322A41'
            bdLeftColor = '#B48BFF'
            bdLeftWidth = 4
        }
        if (shade === 'outline'){
            bgColor = ''
            bdColor = '$default-alert-outline'
            textColor = '$default-alert-outline-text'
            // lIconColor = ''
            // rIconColor = ''
            // bdLeftColor = ''
            // bgColor = '#FFFFFF'
            // bdColor = '#5F3D9C'
            textColor = '#250E4D'
            lIconColor = '#5F3D9C'
            rIconColor = '#322A41'            
            bdWidth = 1

        }
    }

    if (variant === 'success'){
        leftIcon = 'checkcircleo';
        text = 'Selection successfully moved!';
        if (shade === 'solid'){
            bgColor = '$success-alert-solid-fill'
            bdColor = '$success-alert-solid-fill'
            // textColor = 'success-alert-solid-text'
            // lIconColor = ''
            // rIconColor = ''
            // bgColor = '#27846E', 
            // bdColor = '#FFFEF8'
            textColor = '#FFFEF8'
            lIconColor = '#FFFEF8'
            rIconColor = '#FFFEF8'
        }
        if (shade === 'subtle'){
            bgColor = '$success-alert-subtle-fill'
            bdColor = '$success-alert-subtle-fill'
            textColor = 'success-alert-subtle-text'
            // lIconColor = ''
            // rIconColor = ''
            // bgColor = '#D5EBE6'
            // bdColor = '#D5EBE6'            
            // textColor = '#322A41'
            lIconColor = '#27846E'
            rIconColor = '#322A41'
        }
        if (shade === 'outline'){
            bgColor = '$success-alert-outline'
            bdColor = '$success-alert-outline'
            textColor = 'success-alert-outline-text'
            // lIconColor = ''
            // rIconColor = ''
            // bgColor = '#FFFFFF'
            // bdColor = '#D5EBE6'
            // textColor = '#322A41'
            // lIconColor = '#27846E'
            // rIconColor = '#322A41'
            bdWidth = 1
        }
    }

    if (variant === 'error'){
        leftIcon = 'warning';
        text = 'Poor internet connection!'; 
        textColor = '#322A41'
        if (shade === 'solid'){
            bgColor = '#FB923C'
            // bgColor = '$warning-alert-solid-fill'
            // bdColor = '#FB923C'
            bdColor = '$warning-alert-solid-fill'
            // textColor = '#322A41'
            textColor = '$warning-alert-solid-text'
            lIconColor = '#322A41'
            rIconColor = '#322A41'
        }
        if (shade === 'subtle'){
            bgColor = '$warning-alert-subtle-fill'
            bdColor = '$warning-alert-subtle-fill'
            textColor = '$warning-alert-subtle-text'
            // lIconColor = ''
            // rIconColor = ''
            // bgColor = '#FEDEC4'
            // bdColor = '#FEDEC4'
            // textColor = '#322A41'
            lIconColor = '#E07D34'
            rIconColor = '#322A41'
        }
        if (shade === 'outline'){
            bgColor = '$warning-alert-outline'
            bdColor = '$warning-alert-outline'
            textColor = '$warning-alert-outline-text'
            // lIconColor = ''
            // rIconColor = ''
            // bgColor = '#FFFFFF'
            // bdColor = '#FB923C'
            // textColor = '#322A41'
            lIconColor = '#E07D34' 
            rIconColor = '#322A41'
            bdWidth = 1
        }
    }

    return (
        <Alert style={{ backgroundColor: bgColor, borderColor: bdColor, borderWidth: bdWidth, borderLeftWidth: bdLeftWidth, borderLeftColor: content ? '#B48BFF' : ' ', height: content ? 90 : 40 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'top', backgroundColor: bgIconColor}}>
                <AntDesign name={leftIcon} size={14} color='white' paddingTop={4}/>
                {/* <AntDesign name={leftIcon} size={14} color={lIconColor} paddingTop={4}/> */}
                    <View width={250} flexDirection='column'>
                        <Text fontFamily={content && shade !== 'subtle' ? '$heading' : (!content ? '$body' : '$PoppinsReg' )} style={{ color: textColor }} fontSize={content ? 16 : 14}>{text}</Text>
                        <Text fontFamily={'$body'} fontSize={14} style={{ color: contentColor}}>{content}</Text> 
                    </View>
                    <AntDesign name="close" size={16} color='white'/>
                {/* <AntDesign name="close" size={16} color={rIconColor} /> */}
            </View>
        </Alert>
    )}

   