import React from "react";
import { TabBar, Caption, Box, useColorModeValue } from "@spirokit/core";
import {
  FontAwesome6
} from "@expo/vector-icons";
import { Platform } from "react-native";

const TabBarComponent = (props: { navigation: any; state: any; descriptors: any; }) => {
  const { navigation, state, descriptors } = props;
  const isWeb = Platform.OS === "web";

  const onTabPress = (isFocused: boolean, routeKey: any, routeName: any) => {
    const event = navigation.emit({
      type: "tabPress",
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  const getIcon = (routeName: any) => {
    switch (routeName) {
      case "index":
        return FontAwesome6;

      case "news":
        return FontAwesome6;

      case "settings":
        return FontAwesome6;

      default:
        return FontAwesome6;
    }
  };

  return (
    <Box
      width={"full"}
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.1")}
    >
      <Box
        maxWidth={isWeb ? "container.lg" : "full"}
        margin="auto"
        width={"full"}
      >
        <TabBar>
          {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
            const options = descriptors[route.key].options;
            if (options.drawerItemStyle?.display === "none") return;
            return (
              <TabBar.Tab
                onPress={() =>
                  onTabPress(state.index === index, route.key, route.name)
                }
                key={route.key}
                IconComponent={getIcon(route.name)}
                LabelComponent={
                  options.title ? (
                    <Caption>{options.title}</Caption>
                  ) : (
                    <Caption>{route.name}</Caption>
                  )
                }
                isFocused={state.index === index}
              />
            );
          })}
        </TabBar>
      </Box>
    </Box>
  );
};

export default TabBarComponent;
