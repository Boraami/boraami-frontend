import { Stack, useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const person = ["Yoongi's Wife", "tangerines4life"]

export default function User() {
    const name = "Yoongi's Wife";
    const userName = "tangerines4life";

    return (
        <>
            <View style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: 'white',
                padding: 24,
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    maxWidth: 960,
                    marginHorizontal: "auto",
                }}>
                    <Text style={{
                        fontSize: 64,
                        fontWeight: "bold",
                    }}>{name}</Text>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>{userName}</Text>
                </View>
            </View>
        </>
    )

}