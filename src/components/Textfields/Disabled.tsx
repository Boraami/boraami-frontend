import React from 'react';
import { XStack, View, YStack, ScrollView, Text } from 'tamagui';
import { useColorScheme } from 'react-native';
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator';
import { colorScheme } from '../../themes/theme';

type Props = {
    num1: number,
    num2: number,
    helperText: string,
    defaultText: string,
};

    export const Disabled = ({ num1, num2, defaultText, helperText }: Props) => {
       const theme = useColorScheme();
       
        return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 136,
                  width: 350,
                  borderWidth: 1,
                  borderRadius: 6,
                  padding: 4, // padding issues . Without padding the border outline looks wierd, but pading creates white space...between the border and bakground fill ... 
                  borderColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[600]
                }}>
                <View style={{ backgroundColor: theme === 'light' ? colorScheme.boraami[50] : colorScheme.boraami[900]}}>
                    <ScrollViewIndicator 
                        indStyle={{ 
                            backgroundColor: theme === 'light' ? colorScheme.mono[300] : colorScheme.boraami[700]
                        }}> 
                        <Text style={{ 
                            color: theme === 'light' ? colorScheme.boraami[300] : colorScheme.boraami[600] }}>{defaultText}
                        </Text>
                    </ScrollViewIndicator>
                </View>
                </View>

                <XStack width={350} paddingTop={3} flexDirection='row' justifyContent='space-between'>
                    <Text style={{ color: theme === 'light' ? colorScheme.mono[300] : colorScheme.mono[500] }}>{helperText}</Text>
                    <Text style={{ color: theme === 'light' ? colorScheme.mono[300] : colorScheme.mono[500] }}>{num1}/{num2}</Text>
                </XStack> 
            </View>
          );
        };

