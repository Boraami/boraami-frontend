import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function SignIn() {
    return (
        <ImageBackground source={require("../../../assets/Login/bg-dark.png")}
        style={{flex: 1}}>
        <View style={styles.container}>
            <h1>Welcome back?</h1>
            <Text style={{ fontSize: 24 }}>Sign In screen</Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})