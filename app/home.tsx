import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Text } from "tamagui";

function App() {
  return (
    <View>
      <Text fontFamily="$PoppinsReg" fontSize={"$xl"}>
        Poppins Regular - g
      </Text>
      <Text fontFamily="$PoppinsReg" fontStyle="italic" fontSize={"$xl"} fontWeight={"$true"}>
        Poppins Regular Italic - g
      </Text>
      <Text fontFamily="$PoppinsMed" fontSize={"$xl"}>
        Poppins Medium - g
      </Text>
      <Text fontFamily="$PoppinsMed" fontStyle="italic" fontSize={"$xl"} fontWeight={"$true"}>
        Poppins Medium Italic - g
      </Text>
      <Text fontFamily="$heading" fontSize={"$xl"}>
        Poppins Bold - g
      </Text>
      <Text fontFamily="$heading" fontStyle="italic" fontSize={"$xl"} fontWeight={"$true"}>
        Poppins Bold Italic - g
      </Text>
      <Text fontFamily="$body" fontSize={"$4xl"} fontWeight="$4">
        Open Sans Regular - g
      </Text>
      <Text fontFamily="$body" fontStyle="italic" fontSize={"$4xl"} fontWeight="$4">
        Open Sans Regular Italic - g
      </Text>
      <Text fontFamily="$OpenSansBold" fontSize={"$4xl"}>
        Open Sans Bold - g
      </Text>
      <Text fontFamily="$OpenSansBold" fontStyle="italic" fontSize={"$4xl"}>
        Open Sans Bold Italic - g
      </Text>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
