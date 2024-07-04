import { Label, RadioGroup, XStack, YStack } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";

type RadioSizeProps = {
  [key: string]: {
    rwh: number;
    ls: string;
    ris: number;
    dris: number;
  };
};

const radioSizes: RadioSizeProps = {
  sm: {
    rwh: 12,
    ls: "$sm",
    ris: 6,
    dris: 5.5,
  },
  md: {
    rwh: 16,
    ls: "$md",
    ris: 8.5,
    dris: 9.5,
  },
  lg: {
    rwh: 20,
    ls: "$lg",
    ris: 10,
    dris: 12,
  },
};

type Props = {
  value: string;
  disable?: boolean;
  size: string;
  labelText: string;
};

export default function RadioItem({ value, disable, size, labelText }: Props) {
  const id = `radiogroup-${value}`;
  return (
    <XStack>
      <YStack alignItems="center" flexDirection="row" gap={8}>
        <RadioGroup.Item
          id={id}
          borderColor={disable ? "rgba(95,61,156,0.3)" : "#5F3D9C"}
          disabled={disable ? true : false}
          value={value}
          borderWidth={disable ? 2 : 1.2}
          width={radioSizes[size].rwh}
          height={radioSizes[size].rwh}
          focusStyle={{
            borderWidth: 2,
            borderColor: "$focus-radio-border",
          }}
          hoverStyle={{
            borderWidth: 2,
            borderColor: "$serendipity.500",
          }}
        >
          <RadioGroup.Indicator alignItems="center" justifyContent="center">
            <FontAwesome
              name="circle"
              size={radioSizes[size].ris}
              color={disable ? "rgba(95,61,156,0.3)" : "#5F3D9C"}
              style={
                Platform.OS === "android"
                  ? {
                      marginTop: -6.2,
                      marginRight: -5,
                      marginBottom: -6,
                      marginLeft: -4.9,
                    }
                  : {
                      marginTop: -5,
                      marginRight: -5.5,
                      marginBottom: -5.8,
                      marginLeft: -4.9,
                    }
              } /*to position*/
            />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
        <Label
          opacity={disable ? 0.4 : 1}
          disabled={disable ? true : false}
          htmlFor={id}
          size={radioSizes[size].ls}
          fontFamily={"$body"}
          color="$default-radio-text"
        >
          {labelText}
        </Label>
      </YStack>
    </XStack>
  );
}
