import {View, Text, StyleSheet } from "react-native";

export default function Notification() {
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 24}}>Notifications Tab</Text>
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