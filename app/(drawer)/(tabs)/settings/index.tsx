import { Redirect, Tabs, Stack} from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';


export default function Settings() {
  return (
    <>
    <Stack.Screen options={{headerShown: true, title: 'Settings'}} />
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Settings Tab</Text>
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