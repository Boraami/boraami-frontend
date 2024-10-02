import { Text, View, StyleSheet } from 'react-native';
import { Stack, Link } from 'expo-router';

export default function Home() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 24}}>Home Tab</Text>
      <Link href={{pathname: '/welcome'}}>Go to Welcome</Link>
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