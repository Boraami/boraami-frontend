import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const name = "Yoongi's Wife";
  const userName = "tangerines4life";
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Profile' }} />
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>@{userName}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  }
});
