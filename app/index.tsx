import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { Alerts } from '../src/components/Alert/Alerts';
import { WarningAlertDialog } from "../src/components/Alert/WarningAlertDialog";

function App() {
  return (
    <View style={{ alignItems: 'center', paddingTop: 40}}>
        <Alerts 
          variant='default'
          shade='solid'
          content='We are happy to announce that we are going live on July 28th. Get ready!'
          >
        </Alerts>

      <View style={{ alignItems: 'center', paddingTop: 40}}>
        <WarningAlertDialog 
          title="Delete Customer" 
          content="This will remove all data relating to Alex. This action cannot be reversed. Deleted data cannot be recovered."
          boldText=""
        ></WarningAlertDialog>
      </View>

    </View>)}

export default Constants.expoConfig?.extra?.storybookEnabled ? 
Storybook : App;
