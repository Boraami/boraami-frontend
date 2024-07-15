import { ShortAlerts } from '../src/components/Alert/ShortAlerts';
import { toast } from '@backpackapp-io/react-native-toast';
import { View, StyleSheet } from 'react-native';

interface ShortToastProps {
    shade?: "solid" | "subtle" | "outline";
    variant?: "default" | "success" | "warning";
    alert?: string;
    index?: number;
}

export const showCustomShortToast = ({ shade = 'solid', variant = 'success', alert = 'Hello', index = 0 }: ShortToastProps) => {
    toast('',
        {
            isSwipeable: true,
            customToast: () => (
                <View style={[styles.toastContainer, { top: 50 + (index * 10) }]}>
                    <ShortAlerts shade={shade} name={variant} alert={alert} />
                </View>
            )
        });

};

const styles = StyleSheet.create({
    toastContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});