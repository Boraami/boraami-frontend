import { Drawer } from "expo-router/drawer"
import { router, usePathname } from "expo-router";
import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerToggleButton } from "@react-navigation/drawer";
import { FontAwesome6, Feather } from "@expo/vector-icons";
import { Avatar } from "tamagui";
import { colorScheme } from "../../src/themes/theme";

function LogoTitle() {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const iconTheme = isDarkTheme ?
        require('/home/kmarguyne/boraami/boraami-frontend/assets/dark.png') :
        require('/home/kmarguyne/boraami/boraami-frontend/assets/light.png');
    return (
        <View>
            <Image
                style={{ alignSelf: 'flex-end', width: 101, height: 48 }}
                source={iconTheme}
            />
        </View>
    );
}

interface DrawerProps {
    name: string;
    userName: string;
};

const CustomDrawerContent = (props: any) => {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[500];
    const activeIconColor = isDarkTheme ? colorScheme.serendipity[400] : colorScheme.serendipity[300];
    const navBarColor = isDarkTheme ? colorScheme.boraami[900] : colorScheme.boraami[50];
    const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.mono[400];
    const tabTextColor = isDarkTheme ? 'white' : 'black';
    const pathname = usePathname();

    const {
        name,
        userName
    } = props;
    return (
        <DrawerContentScrollView {...props}
            style={{
                direction: "ltr",
                backgroundColor: navBarColor
            }}>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 20,
                borderBottomColor: dividerColor,
                borderBottomWidth: 1,
                marginBottom: 10,
            }}>
                <Avatar circular size={80}>
                    <Avatar.Fallback bc={defaultIconColor} />
                </Avatar>
                <View style={{
                    marginTop: 25,
                    marginLeft: 10,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: '',
                        color: tabTextColor
                    }}>name</Text>
                    <Text style={{
                        fontSize: 15,
                        fontStyle: 'italic',
                        color: defaultIconColor,
                    }}>@userName</Text>
                </View>
            </View>
            <DrawerItem onPress={() => {
                router.push('/profile')
            }}
                label={'Profile'}
                style={{ backgroundColor: pathname == "/profile" ? activeIconColor : navBarColor }}
                labelStyle={[
                    { color: pathname == "/profile" ? "#fff" : tabTextColor },
                    { marginLeft: -20, fontSize: 16, lineHeight: 24 }]}
                icon={({ size }) => (
                    <FontAwesome6 name="user"
                        size={size}
                        color={defaultIconColor} />)} />
            <DrawerItem onPress={() => {
                router.push('/coffee')
            }}
                label={'Buy us a Coffee'}
                style={{ backgroundColor: pathname == "/coffee" ? activeIconColor : navBarColor }}
                labelStyle={[
                    { color: pathname == "/coffee" ? "#fff" : tabTextColor },
                    { marginLeft: -20, fontSize: 16, lineHeight: 24 }]}
                icon={({ size }) => (
                    <Feather name="coffee"
                        size={size}
                        color={defaultIconColor}
                    />)} />
            <DrawerItem onPress={() => {
                router.push('/conduct')
            }}
                label={'Codes of Conduct'}
                style={{ backgroundColor: pathname == "/conduct" ? activeIconColor : navBarColor }}
                labelStyle={[
                    { color: pathname == "/conducts" ? "#fff" : tabTextColor },
                    { marginLeft: -20, fontSize: 16, lineHeight: 24 }]}
                icon={({ size }) => (
                    <FontAwesome6 name="gear"
                        size={size}
                        color={defaultIconColor} />)} />
            <DrawerItem
                onPress={() => {
                    router.push('/terms')
                }}
                label={'Terms & Conditions'}
                style={{ backgroundColor: pathname == "/terms" ? activeIconColor : navBarColor }}
                labelStyle={[
                    { color: pathname == "/terms" ? "#fff" : tabTextColor },
                    { marginLeft: -20, fontSize: 16, lineHeight: 24 }]}
                icon={({ size }) => (
                    <FontAwesome6 name="scroll"
                        size={size}
                        color={defaultIconColor} />)} />
        </DrawerContentScrollView>
    )
}

export default function Layout() {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const toodleColor = isDarkTheme ? 'white' : 'black';
    const barColor = isDarkTheme ? '#140233' : '#FFFFFF'
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                headerLeft: () => <DrawerToggleButton
                    tintColor={toodleColor}
                />,
                headerRight: () => <LogoTitle />,
                headerStyle: {
                    backgroundColor: barColor
                },
            }}>
            <Drawer.Screen name="profile" options={{ title: 'Profile',}} />
            <Drawer.Screen name="coffee" options={{ title: 'Buy us a Coffe', }} />
            <Drawer.Screen name="conduct" options={{ title: 'Codes of Conduct', }} />
            <Drawer.Screen name="terms" options={{ title: 'Terms and Conditions', }} />
            <Drawer.Screen name="(tabs)" options={{ title: 'Profile', headerShown: false }} />
        </Drawer>
    )
}