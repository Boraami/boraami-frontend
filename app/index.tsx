import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Dividers } from '../src/components/Divider/Divider';

function App() {
  return (
        <Dividers vertical={false} borderColor="$bg-brand-subtle-light"/>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
