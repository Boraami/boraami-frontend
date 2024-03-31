import { Redirect, Tabs, Stack, Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';


export default function Index() {
  return (
    <>
    <Stack.Screen options={{headerShown: true, title: 'Home'}} />
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Details Tab of Home Tab</Text>
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