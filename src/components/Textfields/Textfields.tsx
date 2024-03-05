import React from 'react';
import { TextArea, XStack, View, YStack, ScrollView } from 'tamagui';
import { Text } from 'react-native';
import { useColorScheme } from 'react-native';
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator';
import { colorScheme } from '../../themes/theme';

type Props = {
    num1: number,
    num2: number,
    helperText: string,
    defaultText: string,
};

    export const Textfields = ({ num1, num2, defaultText, helperText }: Props) => {
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
                  padding: 4, 
                  borderColor: colorScheme.boraami[300]
                }}>
                <View style={{ backgroundColor: theme === 'light' ? colorScheme.boraami[50] : colorScheme.boraami[900]}}>
                    <ScrollViewIndicator 
                        indStyle={{ 
                            backgroundColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[500]
                        }}> 
                        <Text style={{ 
                            color: theme === 'light' ? colorScheme.mono[800] : colorScheme.boraami[50] }}>{defaultText}
                        </Text>
                    </ScrollViewIndicator>
                </View>
                </View>

                <XStack width={350} flexDirection='row' justifyContent='space-between'>
                    <Text style={{ color: theme === 'light' ? colorScheme.mono[600] : colorScheme.mono[300] }}>{helperText}</Text>
                    <Text style={{ color: theme === 'light' ? colorScheme.mono[600] : colorScheme.mono[300] }}>{num1}/{num2}</Text>
                </XStack> 
            </View>
          );
        };

