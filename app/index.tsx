import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { WarningAlertDialog } from '../src/components/Alert/WarningAlertDialog'
import { Alerts } from '../src/components/Alert/Alerts'

function App() {
  return (
    <View style={{ padding: '8px' }}>
      <View>
        <WarningAlertDialog title="Deleting Customer" content="This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered."></WarningAlertDialog>
      </View>

      <View>
        <Alerts title="We are going live in July!" content="We are happy to announce that we are going live on July 28th. Get ready!" ></Alerts>
    </View>
    </View>
  );
}


export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
