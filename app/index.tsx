import { View } from "react-native";
import { Button, H1, styled } from "tamagui";
import { Alert } from '../src/components/Alert/Alert'

export default function App() {
  return (
    <View style={{ margin: 70 }}>
      <Alert title="Deleting Customer" content="This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered."></Alert>
    </View>
  );
}
