import { Text, View, StyleSheet } from 'react-native';
import ModalWideActionBtns from '../../../src/components/Modals/ModalWideActionButtons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Home Tab</Text>
      <ModalWideActionBtns
        modeltitle={'Title'}
        modeltext={'Being redirected to MNET PLUS'}
        btn1text={'Cancel'}
        btn2text={'Button'}
        closeBtnText={''}
        btnStyles={{
            txt: "Open Modal",
            primary: "normal",
            name: "application-close",
            size: "md",
          }}
        imgSource={require("../../../src/assets/Modals/mnet-image.png")}
        alignment={'image'}></ModalWideActionBtns>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})