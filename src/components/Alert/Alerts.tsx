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
    let bdLeftWidth;
    let text;
    let textColor;

    if (variant === 'default'){
        leftIcon = 'heart';
        text = 'We are going live in July!';
        if (shade === 'solid'){
            bgColor = '#5F3D9C'
            bdColor = '#5F3D9C'
            textColor = '#FFFEF8'
            lIconColor = '#FFFEF8'
            rIconColor = '#FFFEF8'
            bdLeftWidth = 4
        }
        if (shade === 'subtle'){
            bgColor = '#F0E8FF'
            bdColor = '#F0E8FF'
            textColor = '#322A41'
            lIconColor = '#5F3D9C'
            rIconColor = '#322A41'
            bdLeftWidth = 4
        }
        if (shade === 'outline'){
            bgColor = '#FFFFFF'
            bdColor = '#5F3D9C'
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
            bgColor = '#27846E'
            bdColor = '#FFFEF8'
            textColor = '#FFFEF8'
            lIconColor = '#FFFEF8'
            rIconColor = '#FFFEF8'
        }
        if (shade === 'subtle'){
            bgColor = '#D5EBE6'
            bdColor = '#D5EBE6'            
            textColor = '#322A41'
            lIconColor = '#D5EBE6'
            rIconColor = '#322A41'
        }
        if (shade === 'outline'){
            bgColor = '#FFFFFF'
            bdColor = '#27846E'
            textColor = '#322A41'
            lIconColor = '#D5EBE6'
            rIconColor = '#322A41'
            bdWidth = 1
        }
    }

    if (variant === 'error'){
        leftIcon = 'warning';
        text = 'Poor internet connection!'; 
        textColor = '#322A41'
        if (shade === 'solid'){
            bgColor = '#FB923C'
            bdColor = '#FB923C'
            textColor = '#322A41'
            lIconColor = '#322A41'
            rIconColor = '#322A41'
        }
        if (shade === 'subtle'){
            bgColor = '#FEDEC4'
            bdColor = '#FEDEC4'
            textColor = '#322A41'
            lIconColor = '#E07D34'
            rIconColor = '#322A41'
        }
        if (shade === 'outline'){
            bgColor = '#FFFFFF'
            bdColor = '#FB923C'
            textColor = '#322A41'
            lIconColor = '#E07D34' 
            rIconColor = '#322A41'
            bdWidth = 1
        }
    }

    return (
    <Alert style={{ backgroundColor: bgColor, borderColor: bdColor, borderWidth: bdWidth, borderLeftWidth: bdLeftWidth, borderLeftColor: content ? '#B48BFF' : ' ', height: content ? 90 : 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <AntDesign name={leftIcon} size={14} color={lIconColor}/>
            <View width={250} flexDirection='column'>
                <Text fontFamily={'$body'} color={textColor} fontSize={14}>{text}</Text>
                <Text fontFamily={'$body'} fontSize={14} color={contentColor}>{content}</Text> 
            </View>
            <AntDesign name="close" size={16} color={rIconColor} />
        </View>
    </Alert>
    )}
