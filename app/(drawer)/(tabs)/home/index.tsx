import { Stack, Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';


export default function Index() {
  return (
    <>
    <Stack.Screen options={{headerShown: false, title: 'Home'}} />
    <View style={styles.container}>
    <Text style={{fontSize: 24}}>Home Tab</Text>
      <Link href={"/home/details"}>
        <Text>Go to Details</Text>
      </Link>
    </View>
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})