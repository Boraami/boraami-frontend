import React, { useState } from "react";
import {
  XStack,
  View,
  YStack,
  styled,
  Label,
  ScrollView,
  TextArea,
  Text,
  SizableText,
} from "tamagui";
import { useColorScheme } from "react-native";
// import { ScrollViewIndicator } from "@fanchenbao/react-native-scroll-indicator";
import { colorScheme } from "../../themes/theme";


type Props = {
  name: 'placeholder' | 'default' | 'focused' | 'error' | 'disabled';
  helperText: string;
  defaultText: string;
  maxLength?: number;
  onChange?: () => void;
};

const StyledTextbox = styled(TextArea, {
  variants: {
    placeholder: {
      true: {
        backgroundColor: "$placeholder-textbox-fill",
        borderColor: "$placeholder-textbox-border",
        textColor: "$placeholder-textbook-text",
        helperTextColor: "$placeholder-helper-text",
        scrollbarColor: "$placeholder-scroll-bar",
      },
    },
    default: {
      true: {
        backgroundColor: "$default-textbox-fill",
        borderColor: "$default-textbox-border",
        textColor: "$default-textbook-text",
        helperTextColor: "$default-helper-text",
        scrollbarColor: "$default-scroll-bar",
      },
    },
    focused: {
      true: {
        backgroundColor: "$focused-textbox-fill",
        borderColor: "$focused-textbox-border",
        textColor: "$focused-textbook-text",
        helperTextColor: "$focused-helper-text",
        scrollbarColor: "$focused-scroll-bar",
      },
    },
    error: {
      true: {
        backgroundColor: "$error-textbox-fill",
        borderColor: "$error-textbox-border",
        textColor: "$error-textbook-text",
        helperTextColor: "$error-helper-text",
        scrollbarColor: "$error-scroll-bar",
      },
    },
    disabled: {
      true: {
        backgroundColor: "$disabled-textbox-fill",
        borderColor: "$disabled-textbox-border",
        textColor: "$disabled-textbook-text",
        helperTextColor: "$disabled-helper-text",
        scrollbarColor: "$disabled-scroll-bar",
      },
    },
  }
})

export const Textfields = ({ name, maxLength, defaultText, helperText }: Props) => {
  const theme = useColorScheme();
  const [charCount, setCharCount] = useState(0);

  const handleOnChangeText = (text: string) => {
    setCharCount(text.length);
  };

  return (
    <ScrollView maxHeight={161} borderColor={'orange'} borderWidth={2} paddingBottom={4}>
      <TextArea
          borderColor={colorScheme.boraami[300]}
          height={136}
          width={350}
          backgroundColor={
            theme === "light"
              ? colorScheme.boraami[50]
              : colorScheme.boraami[900]
          }
          borderRadius={6}
          borderWidth={1}
          onChangeText={handleOnChangeText}
        >
          <Text
            fontFamily={"$body"}
            fontSize={12}
            lineHeight={18}
            color={
              theme === "light"
                ? colorScheme.mono[800]
                : colorScheme.boraami[50]
            }
          >
            {defaultText}
          </Text>
        </TextArea>
        <XStack flexDirection="row" justifyContent="space-between">
          <Text
            style={{
              color:
                theme === "light"
                  ? colorScheme.mono[600]
                  : colorScheme.mono[300],
            }}
          >
            {helperText}
          </Text>
          <Text
            style={{
              color:
                theme === "light"
                  ? colorScheme.mono[600]
                  : colorScheme.mono[300],
            }}
          >
            {charCount}/{maxLength}
          </Text>
        </XStack>
      {/* </YStack> */}
    </ScrollView>
  );
};

// return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <View
//         style={{
//           height: 136,
//           width: 350,
//           borderWidth: 1,
//           borderRadius: 6,
//           padding: 2, // padding issues . Without padding the border outline looks wierd, but pading creates white space...between the border and bakground fill ...
//           borderColor: colorScheme.boraami[300]
//         }}>
//         <View style={{ backgroundColor: theme === 'light' ? colorScheme.boraami[50] : colorScheme.boraami[900]}}>
//             <ScrollViewIndicator
//                 indStyle={{
//                     backgroundColor: theme === 'light' ? colorScheme.boraami[200] : colorScheme.boraami[500]
//                 }}>
//                 <Text style={{
//                     color: theme === 'light' ? colorScheme.mono[800] : colorScheme.boraami[50] }}>{defaultText}
//                 </Text>
//             </ScrollViewIndicator>
//         </View>
//         </View>

//         <XStack width={350} paddingTop={3} flexDirection='row' justifyContent='space-between'>
//             <Text style={{ color: theme === 'light' ? colorScheme.mono[600] : colorScheme.mono[300] }}>{helperText}</Text>
//             <Text style={{ color: theme === 'light' ? colorScheme.mono[600] : colorScheme.mono[300] }}>{num1}/{num2}</Text>
//         </XStack>
//     </View>
//   );
// };
