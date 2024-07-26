import { useState } from "react";
import { XStack, Button, SizableText } from "tamagui";
import { SimpleLineIcons } from "@expo/vector-icons";
import Icon from "../Icon/Icon";
import { Alert, Dimensions, StyleSheet } from "react-native";
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from "react-native-popup-menu";

type Props = {
  data: {
    menuText: string;
    iconName: string;
  }[];
  handleAction?: (...args: any[]) => void;
};

const { width } = Dimensions.get('window');

export function OverflowMenu({ data, handleAction }: Props) {
  const someAction = (message: string) => {
    handleAction && handleAction();
    Alert.alert(message);
  };

  return (
    <MenuProvider style={styles.container}>
      <XStack flexDirection="column" padding={2}>
        <Menu>
          <MenuTrigger>
            <Button
              alignSelf="flex-start"
              justifyContent="flex-start"
              width={80}
              height={30}
            >
              <SimpleLineIcons name="options-vertical" size={24} color="#8F66D6" />
            </Button>
          </MenuTrigger>
          <MenuOptions customStyles={menuOptionsStyles}>
            {data.map((item, i) => (
              <MenuOption key={`${item.menuText}-${i}`} onSelect={() => someAction(item.menuText)}>
                <XStack flexDirection="row" alignItems="center" paddingVertical={5}>
                  <Icon name={item.iconName} size={15} color="#F7F3FF" />
                  <SizableText
                    paddingTop={4}
                    fontFamily={"$btn"}
                    size={"$xs"}
                    lineHeight={15}
                    color={"$text-icon-color"}
                    style={styles.menuText}
                  >
                    {item.menuText}
                  </SizableText>
                </XStack>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </XStack>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    marginLeft: 10,
  },
});

const menuOptionsStyles = {
  optionsContainer: {
    position: 'absolute' as 'absolute',
    borderRadius: 4,
    width: 150,
    paddingVertical: 10,
    backgroundColor: "#5F3D9C",
    top: width - 160,
    left: width - 160, // Ensure the menu stays within the screen width
    right: 10, // Ensure the menu stays within the screen width
  },
  optionTouchable: {
    underlayColor: '#ccc',
    activeOpacity: 70,
  },
};