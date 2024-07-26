import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { XStack, Button, SizableText } from "tamagui";
import { SimpleLineIcons } from "@expo/vector-icons";
import Icon from "../src/components/Icon/Icon";

type Props = {
  data: {
    menuText: string;
    iconName: string;
  }[];
  handleAction?: (...args: any[]) => void;
};

function OverflowMenu({ data, handleAction }: Props) {
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
    borderRadius: 4,
    width: 150,
    paddingVertical: 10,
    backgroundColor: "#5F3D9C",
    paddingBottom: 10,
    paddingRight: 10,
    gap: 6
  },
  optionTouchable: {
    underlayColor: '#ccc',
    activeOpacity: 70,
  },
};

const data = [
  { menuText: 'Report', iconName: 'flag' },
  { menuText: 'Mute User', iconName: 'bell-slash' },
  { menuText: 'Block User', iconName: 'user-slash' },
];

export default function App() {
  return (
    <View style={{ marginTop: 100, flex: 1 }}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => { /* Handle menu close logic */ }}>
      <OverflowMenu
        data={data}
        handleAction={() => console.log('Action handled')}
      />
    </View>
  );
}


/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default function App() {
  return (
    <MenuProvider style={styles.container}>
      <Text style={styles.header}>Popover Menu Example</Text>
      <Menu>
        <MenuTrigger text='Open Menu' style={styles.menuTrigger} />
        <MenuOptions>
          <MenuOption onSelect={() => alert('Option 1 selected')} text='Option 1' />
          <MenuOption onSelect={() => alert('Option 2 selected')} text='Option 2' />
          <MenuOption onSelect={() => alert('Option 3 selected')} text='Option 3' />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:720,
    marginLeft: 1900
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  menuTrigger: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});*/
