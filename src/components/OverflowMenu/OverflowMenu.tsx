import { useState } from "react";
import { XStack, Button, SizableText } from "tamagui";
import { SimpleLineIcons } from "@expo/vector-icons";
import Icon from "../Icon/Icon";

type Props = {
  data: {
    menuText: string;
    iconName: string;
  }[];
};

export function OverflowMenu({ data }: Props) {
  const [visibility, setVisibility] = useState(false);
  const handleResponderRelease = () => {
    setVisibility(!visibility);
  };
  /*upon use of component in a screen onStartShouldSetResponder={() => true} and onResponderRelease={handleResponderRelease}
should be given to the parent component in order for the menu to disappear anywhere on the screen*/
  return (
    <>
      <XStack
        flexDirection="column"
        padding={2}
        onStartShouldSetResponder={() => true}
        onResponderRelease={handleResponderRelease}
      >
        <Button alignSelf="flex-start" justifyContent='flex-start' width={80} height={20} onPress={() => setVisibility(!visibility)}>
          <SimpleLineIcons name="options" size={24} color="#8F66D6" />
        </Button>
        {visibility ? (
          <XStack
            flexDirection="column"
            borderRadius={4}
            width={110}
            paddingTop={9}
            paddingBottom={10}
            paddingRight={10}
            paddingLeft={0}
            gap={6}
            backgroundColor={"$overflow-bg-color"}
          >
            {data.map((item, i) => {
              {
                return (
                  <Button justifyContent="flex-start" height={20} key={`${item.menuText}-${i}`} paddingLeft={12}>
                  <XStack width={12} height={12}>
                    <Icon name={item.iconName} size={10} color="#F7F3FF" style={{}} />
                  </XStack>
                  <SizableText
                    paddingTop={4}
                    fontFamily={"$btn"}
                    size={"$xs"}
                    lineHeight={12}
                    color={"$text-icon-color"}
                  >
                    {item.menuText}
                  </SizableText>
                </Button>
                );
              }
            })}
          </XStack>
        ) : null}
      </XStack>
    </>
  );
}
