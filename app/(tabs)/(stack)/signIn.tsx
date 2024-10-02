import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: true,
                title: 'Sign In'
            }}/>
            <Text style={{ fontSize: 24 }}>Sign In screen</Text>
        </View>
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