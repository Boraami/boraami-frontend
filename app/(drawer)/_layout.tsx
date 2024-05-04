import { Drawer } from "expo-router/drawer"
import { router, usePathname } from "expo-router";
import { View, Image, useColorScheme } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerToggleButton, createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome6, Feather, FontAwesome } from "@expo/vector-icons";
import { Avatar, SizableText } from "tamagui";
import { colorScheme } from "../../src/themes/theme";
import { tokens } from "../../src/themes/tokens";

function LogoTitle() {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const iconTheme = isDarkTheme ?
        require('/home/kmarguyne/boraami/boraami-frontend/assets/dark.png') :
        require('/home/kmarguyne/boraami/boraami-frontend/assets/light.png');
    return (
        <View>
            <Image
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 24,
                    marginTop: 7,
                    width: 101,
                    height: 48 }}
                source={iconTheme}
            />
        </View>
    );
}

interface DrawerProps {
    name: string;
    userName: string;
    followers: number;
    following: number;
};

function FollowCount(props: DrawerProps) {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const tabTextColor = isDarkTheme ? 'white' : 'black';

    const {
        followers,
        following
    } = props;

    return (
        <View style={{ //follow count
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            gap: 40,
            marginBottom: 19,
            marginTop: 19,
        }}>
            <View style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: 8,
            }}>
                <SizableText style={{ //67
                    fontSize: 16,
                    fontFamily: '',
                    color: tabTextColor,
                    fontWeight: 700,
                }}>{following}</SizableText>
                <SizableText style={{
                    fontSize: 16,
                    fontFamily: '',
                    fontWeight: 400,
                    color: tabTextColor,
                }}>Following</SizableText>
            </View>
            <View style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: 8,
            }}>
                <SizableText style={{//208
                    fontSize: 16,
                    fontFamily: '',
                    color: tabTextColor,
                    fontWeight: 700,
                }}>{followers}</SizableText>
                <SizableText style={{
                    fontSize: 16,
                    fontFamily: '',
                    fontWeight: 400,
                    color: tabTextColor,
                }}>Followers</SizableText>
            </View>
        </View>
    )
}

function UserInfo(props: DrawerProps) {
    const {
        name,
        userName
    } = props;

    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const tabTextColor = isDarkTheme ? 'white' : 'black';
    const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[700];

    return (
        <View style={{ //user info
            display: 'flex',
            width: 256,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            alignSelf: 'stretch',
            marginLeft: 9,
            gap: -4,
        }}>
            <SizableText style={{
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: '',
                color: tabTextColor,
            }}>{name}</SizableText>
            <SizableText style={{
                fontSize: 15,
                fontStyle: 'italic',
                fontFamily: '',
                color: defaultIconColor,
            }}>@{userName}</SizableText>
        </View>

    )
}

function UserDisplay(props: DrawerProps) {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[500];
    const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.mono[400];
    const tabTextColor = isDarkTheme ? 'white' : 'black';

    return (
        <View style={{ //user display
            display: 'flex',
            gap: 8,
            flexDirection: 'column',
            marginTop: 19,
            borderBottomColor: dividerColor,
            borderBottomWidth: 1,
        }}>
            <View style={{
                flexDirection: 'column',
            }}>
                <View style={{ //avatar
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: 64,
                    height: 64,
                    flexDirection: 'row',
                    marginTop: 16,
                    marginLeft: 31,
                }}>
                    <Avatar circular size={80}>
                        <Avatar.Fallback bc={defaultIconColor} />
                    </Avatar>
                    <UserInfo {...props} />
                </View>
                <View style={{
                    marginLeft: 20,
                    marginTop: 19,
                }}>
                    <FollowCount {...props}/>
                </View>
            </View>
        </View>)
}

const CustomDrawerContent = (props: DrawerProps) => {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[500];
    const activeIconColor = isDarkTheme ? colorScheme.serendipity[400] : colorScheme.serendipity[300];
    const navBarColor = isDarkTheme ? colorScheme.boraami[900] : colorScheme.boraami[50];
    const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.mono[400];
    const menuColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[700];
    const tabTextColor = isDarkTheme ? 'white' : 'black';
    const pathname = usePathname();

    return (
        <DrawerContentScrollView {...props}
            style={{
                backgroundColor: navBarColor
            }}>
            <View>
                <View style={{ //top bar
                    borderBottomColor: dividerColor,
                    borderBottomWidth: 1,
                    display: 'flex',
                    gap: 100,
                    flexDirection: 'row',
                }}>
                    <View style={{alignSelf: 'flex-start'}}>
                    <SizableText style={{
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontFamily: 'monospace',
                    color: menuColor,
                    fontWeight: 700,
                    lineHeight: 20,
                    marginLeft: 22,
                    marginTop: 15,
                    paddingTop: 4
                }}>Menu</SizableText>
                    </View>
                    <LogoTitle />
                </View>
                <UserDisplay {...props} />
            </View>
            <View style={{
                display: 'flex',
                gap: 8,
                marginLeft: 36.5,
                marginTop: 19,
                width: 249
            }}>
            <DrawerItem onPress={() => {
                router.push('/profile')
            }}
                label={'Profile'}
                style={{
                    backgroundColor: pathname == "/profile" ? activeIconColor : navBarColor,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12
            }}
                labelStyle={[
                    { color: pathname == "/profile" ? "#fff" : tabTextColor },
                    { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
                icon={({ size }) => (
                    <FontAwesome6 name="user-large"
                        size={size}
                        color={defaultIconColor}
                         />)}/>
            <DrawerItem onPress={() => {
                router.push('/coffee')
            }}
                label={'Buy us a Coffee'}
                style={{
                    backgroundColor: pathname == "/coffee" ? activeIconColor : navBarColor,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                }}
                labelStyle={[
                    { color: pathname == "/coffee" ? "#fff" : tabTextColor },
                    { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
                icon={({ size }) => (
                    <FontAwesome name="coffee"
                        size={size}
                        color={defaultIconColor}
                    />)} />
            <DrawerItem onPress={() => {
                router.push('/conduct')
            }}
                label={'Codes of Conduct'}
                style={{
                    backgroundColor: pathname == "/conduct" ? activeIconColor : navBarColor,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                 }}
                labelStyle={[
                    { color: pathname == "/conducts" ? "#fff" : tabTextColor },
                    { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
                icon={({ size }) => (
                    <FontAwesome6 name="gear"
                        size={size}
                        color={defaultIconColor} />)} />
            <DrawerItem
                onPress={() => {
                    router.push('/terms')
                }}
                label={'Terms & Conditions'}
                style={{
                    backgroundColor: pathname == "/terms" ? activeIconColor : navBarColor,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                 }}
                labelStyle={[
                    { color: pathname == "/terms" ? "#fff" : tabTextColor },
                    { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
                icon={({ size }) => (
                    <FontAwesome6 name="scroll"
                        size={size}
                        color={defaultIconColor} />)} />
                        </View>
        </DrawerContentScrollView >
    )
}

//const Drawer = createDrawerNavigator();

export default function Layout() {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const toodleColor = isDarkTheme ? 'white' : 'black';
    const barColor = isDarkTheme ? '#140233' : '#FFFFFF'
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent
            name={"Yoongi's Wife"}
            userName={"tangerines4life"}
            followers={208}
            following={67} {...props} />}
            screenOptions={{
                headerShown: false,
                headerLeft: () => <DrawerToggleButton
                    tintColor={toodleColor}
                />,
                headerRight: () => <LogoTitle />,
                headerStyle: {
                    backgroundColor: barColor
                },
            }}>
            <Drawer.Screen name="profile" options={{ title: 'Profile', headerShown: true,}} />
            <Drawer.Screen name="coffee" options={{ title: 'Buy us a Coffe', headerShown: true,}} />
            <Drawer.Screen name="conduct" options={{ title: 'Codes of Conduct', headerShown: true,}} />
            <Drawer.Screen name="terms" options={{ title: 'Terms', headerShown: true,}} />
        </Drawer>
    )
}