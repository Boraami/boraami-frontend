import { XStack } from "tamagui";

const Overlay = () => {
  return (
    <XStack
      width={"100%"}
      height={"100%"}
      opacity={0.4}
      backgroundColor={"$overlay-bg-color"}
    ></XStack>
  );
};

export default Overlay;
