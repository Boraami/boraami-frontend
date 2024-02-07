import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { SizableText } from "tamagui";

function App() {
  return (
    <View>
      <SizableText fontFamily="$PoppinsReg" size={"$3xl"}>
        Poppins Regular - g
      </SizableText>
      <SizableText fontFamily="$PoppinsReg" fontStyle="italic" size={"$3xl"}>
        Poppins Regular Italic - g
      </SizableText>
      <SizableText fontFamily="$btn" size={"$xl"}>
        Poppins Medium - g
      </SizableText>
      <SizableText fontFamily="$btn" fontStyle="italic" size={"$xl"}>
        Poppins Medium Italic - g
      </SizableText>
      <SizableText fontFamily="$heading" size={"$xl"}>
        Poppins Bold - g
      </SizableText>
      <SizableText fontFamily="$heading" fontStyle="italic" size={"$xl"}>
        Poppins Bold Italic - g
      </SizableText>
      <SizableText fontFamily="$body" size={"$4xl"} fontWeight="$true">
        Open Sans Regular - g
      </SizableText>
      <SizableText fontFamily="$body" fontStyle="italic" size={"$4xl"}>
        Open Sans Regular Italic - g
      </SizableText>
      <SizableText fontFamily="$OpenSansBold" size={"$4xl"}>
        Open Sans Bold - g
      </SizableText>
      <SizableText fontFamily="$OpenSansBold" fontStyle="italic" size={"$4xl"}>
        Open Sans Bold Italic - g
      </SizableText>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
