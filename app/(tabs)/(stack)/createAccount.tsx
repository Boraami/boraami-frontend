import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';

export default function CreateAccount() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>Account creation screen</Text>
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