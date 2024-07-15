import { toast } from '@backpackapp-io/react-native-toast';
import { LongAlert } from "../src/components/Alert/LongAlert";
import { View, StyleSheet } from 'react-native';

interface LongToastProps {
    shade?: "solid" | "subtle" | "outline";
    content?: string;
    alert?: string;
    index?: number;
  }

export const showCustomToast = ({ shade = 'solid', alert = 'Hello', content = 'success', index = 0 }: LongToastProps) => {
    toast('',
      {
        isSwipeable: true,
        customToast: () => (
          <View style={[styles.toastContainer, { top: 50 + (index * 10) }]}>
            <LongAlert shade={shade} alert={alert} content={content} />
          </View>
        )
      });

  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    toastContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });