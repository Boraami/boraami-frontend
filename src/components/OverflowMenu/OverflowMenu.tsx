import { XStack, Text, Label, SizableText } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';
import {Image, YStack, Separator} from "tamagui";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Button,  Adapt, Dialog, Sheet } from 'tamagui'
export function OverflowMenu(props:{
                            menutext1: string,
                            menutext2:string,
                            menutext3:string
}){
    return(

<>
        <Dialog modal>
      <Dialog.Trigger asChild>
        <Button  alignSelf='flex-start'>
        <SimpleLineIcons name="options" size={24} color="#341866" />
        </Button>
      </Dialog.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet   zIndex={200000} modal dismissOnSnapToBottom disableDrag dismissOnOverlayPress>
          <Sheet.Frame 
          justifyContent="flex-start"
          padding={"$2"}>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        >
             <XStack 
        flexDirection="column" 
        borderRadius={4} 
        width={110}
        paddingTop={9}
        paddingBottom={10}
        paddingRight={10}
        paddingLeft={0}
        height={90}
        gap={6}
        backgroundColor={"$overflow-bg-color"}>
           
              <Button  justifyContent='flex-start' height={20} >
                <FontAwesome6 name="flag"  size={7} color="#F7F3FF" />
                <SizableText
                 paddingTop={4}
                 fontFamily={'$btn'}
                 fontSize={'$xs'}
                 lineHeight={12}
                 color={'$text-icon-color'}
                 >{props.menutext1}</SizableText></Button>

              <Button  justifyContent='flex-start' height={20} >
                <FontAwesome6 name="bell-slash" color="#F7F3FF" size={7} />
                <SizableText
                 paddingTop={4}
                 fontFamily={'$btn'}
                 fontSize={'$xs'}
                 lineHeight={12}
                 color={'$text-icon-color'}
                 >{props.menutext2}</SizableText></Button>


              <Button  justifyContent='flex-start' height={20} >
                <FontAwesome6 name="user-slash" color="#F7F3FF"size={7} />
                <SizableText
                 paddingTop={4}
                 fontFamily={'$btn'}
                 fontSize={'$xs'}
                 lineHeight={12}
                 color={'$text-icon-color'}
                 >{props.menutext3}</SizableText></Button>
        </XStack>
        </Dialog.Content>
      </Dialog.Portal>
  </Dialog>



        <XStack>

       
        </XStack>
        </>
    )
}