import {Drawer} from "expo-router/drawer"
import { router, usePathname } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome6, Feather } from "@expo/vector-icons";

const CustomDrawerContent = (props: any) => {
    const pathname = usePathname();

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.userInfoWrapper}>
                <Image width={80} height={80} style={styles.userImg}/>
                <View style={styles.userDetailsWrapper}>
                <Text style={styles.userName}>Yoongi's wife</Text>
                <Text style={styles.userTag}>@tangerines4life</Text>
                </View>
            </View>
        <DrawerItem onPress={() => {
            router.push('/profile')
        }}
        label={'Profile'}
        style={{backgroundColor: pathname == "/profile" ? "#333" : "#fff"}}
        labelStyle={[
            styles.navItemLabel,
            {color: pathname == "/profile" ? "#fff" : "#000"},
        ]}
        icon={({size}) => (
        <FontAwesome6 name="user"
        size={size}
        color={'#AA7AFF'}/>)}/>
        <DrawerItem onPress={() => {
            router.push('/coffee')
        }}
        label={'Buy us a Coffee'}
        style={{backgroundColor: pathname == "/coffee" ? "#333" : "#fff"}}
        labelStyle={[
            styles.navItemLabel,
            {color: pathname == "/coffee" ? "#fff" : "#000"},
        ]}
        icon={({size}) => (
        <Feather     name="coffee"
        size={size}
        color={'#AA7AFF'}
        />)}/>
        <DrawerItem onPress={() => {
            router.push('/conduct')
        }}
        label={'Codes of Conduct'}
        style={{backgroundColor: pathname == "/conduct" ? "#333" : "#fff"}}
        labelStyle={[
            styles.navItemLabel,
            {color: pathname == "/conducts" ? "#fff" : "#000"},
        ]}
        icon={({size}) => (
        <FontAwesome6 name="gear"
        size={size}
        color={'#AA7AFF'}/>)}/>
        <DrawerItem
        onPress={() => {
            router.push('/terms')
        }}
        label={'Terms & Conditions'}
        style={{backgroundColor: pathname == "/terms" ? "#333" : "#fff"}}
        labelStyle={[
            styles.navItemLabel,
            {color: pathname == "/terms" ? "#fff" : "#000"},
        ]}
        icon={({size}) => (
        <FontAwesome6 name="scroll"
        size={size}
        color={'#AA7AFF'}/>)}/>
    </DrawerContentScrollView>
    )
}

export default function Layout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props}/>}
        screenOptions={{
            headerShown: false,
            title: 'Menu'
            }}>
            <Drawer.Screen name="profile" options={{headerShown: true}}/>
            <Drawer.Screen name="coffee" options={{headerShown: true}}/>
            <Drawer.Screen name="conduct" options={{headerShown: true}}/>
            <Drawer.Screen name="terms" options={{headerShown: true}}/>
        </Drawer>
    )
}

const styles = StyleSheet.create({
    navItemLabel: {
        marginLeft: -20,
        fontSize: 16,
        lineHeight: 24,
    },
    userInfoWrapper: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    userImg: {
        borderRadius: 40,
    },
    userDetailsWrapper: {
        marginTop: 25,
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userTag: {
        fontSize: 15,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    }
});