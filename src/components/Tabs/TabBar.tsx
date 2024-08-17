import * as React from 'react';
import {
  Dimensions,
  ScrollView,
} from 'react-native';
import { TabView, SceneMap, Route, SceneRendererProps } from 'react-native-tab-view';
import { SizableText, YStack, XStack, FontSizeTokens, Button } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { ComponentProps } from "react";
import Post from '../Post/Post';

type FontAwesomeIconName = ComponentProps<typeof FontAwesome>['name'];

type TSize = {
  [key: string]: {
    textsize: number;
    iconsize: number;
    lh: number;
  };
};

const TabSize: TSize = {
  $xs: {
      textsize:12,
      iconsize:8,
      lh: 12,
  },
  $sm: {
      textsize:14,
      iconsize:10,
      lh: 14,

  },
  $md: {
      textsize:16,
      iconsize:12,
      lh: 16,

  },
  $lg: {
      textsize:18,
      iconsize:14,
      lh: 18,

  },
};

const FirstRoute: React.FC = () => (
  <ScrollView >
        <Post
         avatarText= "TT"
         displayName= "Bessie Cooper"
         username="@armyuser1"
         postText= "I miss them."
         postImg = {require("../../assets/Notification/Image.png")} />
        <Post
         avatarText= "TT"
         displayName= "sunshine"
         username="@armyuser1"
         postText= "I miss them."
         postImg = {require("../../assets/Notification/Image.png")} />
         <Post
         avatarText= "TT"
         displayName= "fab"
         username="@armyuser1"
         postText= "I miss them."
         postImg = {require("../../assets/Notification/Image.png")} />
         <Post
         avatarText= "TT"
         displayName= "kigris"
         username="@armyuser1"
         postText= "I miss them."
         postImg = {require("../../assets/Notification/Image.png")} />
         <Post
         avatarText= "TT"
         displayName= "Bessie Cooper"
         username="@armyuser1"
         postText= "I miss them."
         postImg = {require("../../assets/Notification/Image.png")} />
  </ScrollView>
);

const SecondRoute: React.FC = () => (
  <ScrollView >
    <SizableText>Tab 2</SizableText>
  </ScrollView>
);
const ThirdRoute: React.FC = () => (
  <ScrollView>
    <SizableText>Tab 3</SizableText>
  </ScrollView>
);

const FourthRoute: React.FC = () => (
  <ScrollView >
    <SizableText>Tab 4</SizableText>
  </ScrollView>
);
const FifthRoute: React.FC = () => (
  <ScrollView >
    <SizableText>Tab 4</SizableText>
  </ScrollView>
);

type TabRoute = Route & {
  title: string;
  iconName?: FontAwesomeIconName;
  size: FontSizeTokens;
  disabled: boolean;
  alignment: |"IconLeft"|"IconRight"|"NoIcon";
};
type TabButtonType = {
  iconName?: FontAwesomeIconName;
  tabTitle: string;
  size: FontSizeTokens;
  disabled: boolean;
  alignment: |"IconLeft"|"IconRight"|"NoIcon";
};
const initialLayout = { width: Dimensions.get('window').width };

const TabViewExample: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0);
  const [routes] = React.useState<TabRoute[]>([
    { key: 'first', title: 'First', iconName:'heart',size:'$xs',disabled:false,alignment:'IconLeft' },
    { key: 'second', title: 'Second',iconName:'heart',size:'$sm',disabled:false,alignment:'IconRight' },
    { key: 'third', title: 'Third',size:'$md',iconName:'heart',disabled:false,alignment:'NoIcon' },
    { key: 'fourth', title: 'Fourth', size:'$lg',iconName:'heart',disabled:true,alignment:'IconLeft' },
   // { key: 'five', title: 'Fifth', size:'$lg',iconName:'heart',disabled:true,alignment:'IconLeft' },

  ]);
  const renderTabBar = (props: SceneRendererProps & { navigationState: { routes: TabRoute[] } }) => {
    const inputRange = props.navigationState.routes.map((_, i) => i);
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    
    return (
      <XStack 
        flexWrap="wrap">
        {props.navigationState.routes.map((route, i) => {
          const colorText= route.disabled ? '$tab-disabled-text': 
          index === i  ?'$tab-active-text':'$tab-default-text'
          const colorIcon= route.disabled ? isDarkTheme? "rgba(204,204,204, 0.5)":"rgba(34,34,34,0.5)" :
          index === i  ? isDarkTheme?"#B48BFF":"#5F3D9C" : isDarkTheme?"#C9C3D4":"#5F3D9C"
          const opacity= route.disabled? 0.5 : 1
          const activeBorderLine = index===i? 4:0
          const activeBorderColor = index===i?'$tab-active-line': 'transparent'
          return (
            <YStack
              key={i}
              marginHorizontal={5}
              >
              <Button
              key={index}
              disabled={route.disabled}
              onPress={() => setIndex(i)}
              opacity={opacity}
              paddingTop={10}
              paddingHorizontal={5}
              justifyContent='center'
              focusable>
              {route.alignment==="IconLeft"?
              <FontAwesome 
              name={route.iconName}
              size={TabSize[route.size].iconsize} 
              paddingTop={2}
              color={colorIcon}
              hoverStyle={{
                color:isDarkTheme?"#38BDF8":"#0284C7"
              }}
              focusStyle={{
                color:isDarkTheme?"#E0F2FE":"#4D455C"
              }}/>:null
            }
                <SizableText
                fontSize={TabSize[route.size].textsize}
                size={route.size}
                lineHeight={TabSize[route.size].lh}
                paddingTop={3}
                fontFamily="$btn"
                hoverStyle={{
                  color:"$tab-hover-text"
                }}
                focusStyle={{
                  color:'$tab-focus-text',
                }}
                color={colorText}>
                  {route.title}
                </SizableText>
                {route.alignment==='IconRight'?
                <FontAwesome 
                name={route.iconName}
                size={TabSize[route.size].iconsize} 
                color={colorIcon}
                hoverStyle={{
                  color:isDarkTheme?"#38BDF8":"#0284C7"
                }}
                focusStyle={{
                  color:isDarkTheme?"#E0F2FE":"#4D455C"
                }}/>:null
              } 
              </Button>
              <XStack
               height= {activeBorderLine} // Height of the curved part
               backgroundColor= {activeBorderColor}
               borderTopLeftRadius= {4} 
               borderTopRightRadius= {4} />
              </YStack>
            )
        })}
      </XStack>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    //five: FifthRoute,

  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      />
  );
};
export default TabViewExample;