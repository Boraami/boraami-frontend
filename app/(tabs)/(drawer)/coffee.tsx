import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Coffee() {
    return (
      <View style={styles.container}>
      <View style={styles.main}>
      <Text style={styles.title}>Buy Coffee</Text>
        <Link href={'/(tabs)/home'} asChild>
          <Button title="Go to Tabs"/>
        </Link>
      </View>
    </View>
      );
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
    fontSize: 64,
    fontWeight: "bold",
  }});