import { Redirect, Tabs, Stack} from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';


export default function Index() {
  return (
    <>
    <Stack.Screen options={{headerShown: true, title: 'Notification'}} />
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Notifications Tab</Text>
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