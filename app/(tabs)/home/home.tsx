import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 24}}>Home Tab</Text>
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