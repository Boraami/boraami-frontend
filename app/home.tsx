import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View, SizableText, Text } from "tamagui";

function App() {
  return (
    <View backgroundColor={"$ptd.400"}>
      <Text color={"$text-primary"} theme="light">
        Test theme
      </Text>
      <SizableText color={"$text-inactive"} fontFamily="$PoppinsReg" size={"$3xl"}>
        Poppins Regular - g
      </SizableText>
      <SizableText
        color={"$bg-neutral-subtle"}
        fontFamily="$PoppinsReg"
        fontStyle="italic"
        size={"$3xl"}
      >
        Poppins Regular Italic - g
      </SizableText>
      <SizableText color={"$bg-success-strong"} fontFamily="$btn" size={"$xl"}>
        Poppins Medium - g
      </SizableText>
      <SizableText color={"$bg-success-strong"} fontFamily="$btn" fontStyle="italic" size={"$xl"}>
        Poppins Medium Italic - g
      </SizableText>
      <SizableText color={"$border-neutral"} fontFamily="$heading" size={"$xl"}>
        Poppins Bold - g
      </SizableText>
      <SizableText
        color={"$bg-success-subtle"}
        fontFamily="$heading"
        fontStyle="italic"
        size={"$xl"}
      >
        Poppins Bold Italic - g
      </SizableText>
      <SizableText color={"$text-error"} fontFamily="$body" size={"$4xl"} fontWeight="$true">
        Open Sans Regular - g
      </SizableText>
      <SizableText color={"$bg-warning-subtle"} fontFamily="$body" fontStyle="italic" size={"$4xl"}>
        Open Sans Regular Italic - g
      </SizableText>
      <SizableText color={"$bg-brand-subtle-hover"} fontFamily="$OpenSansBold" size={"$4xl"}>
        Open Sans Bold - g
      </SizableText>
      <SizableText
        color={"$bg-success-strong"}
        fontFamily="$OpenSansBold"
        fontStyle="italic"
        size={"$4xl"}
      >
        Open Sans Bold Italic - g
      </SizableText>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
