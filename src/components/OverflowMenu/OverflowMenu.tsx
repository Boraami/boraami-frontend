import { useState } from "react";
import { XStack, Button, SizableText } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
type Props = {
  menutext1: string,
  menutext2: string,
  menutext3: string,
}
export function OverflowMenu({ menutext1, menutext2, menutext3 }: Props){
  const [visibility, setVisibility] = useState(false)
  const handleResponderRelease = () => {
    setVisibility(!visibility)}
/*upon use of component in a screen onStartShouldSetResponder={() => true} and onResponderRelease={handleResponderRelease}
should be given to the parent component in order for the menu to disappear anywhere on the screen*/
    return(
      <XStack flexDirection='column' padding={2} 
      onStartShouldSetResponder={() => true}
      onResponderRelease={handleResponderRelease}>
        <Button  alignSelf='flex-start' onPress={()=>setVisibility(!visibility)}>
        <SimpleLineIcons name="options" size={24} color="#8F66D6"/>
        </Button>
        {visibility?
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
                  size={'$xs'}
                  lineHeight={12}
                  color={'$text-icon-color'}
                  >{menutext1}</SizableText></Button>
               <Button  justifyContent='flex-start' height={20} >
                 <FontAwesome6 name="bell-slash" color="#F7F3FF" size={7} />
                 <SizableText
                  paddingTop={4}
                  fontFamily={'$btn'}
                  size={'$xs'}
                  lineHeight={12}
                  color={'$text-icon-color'}
                  >{menutext2}</SizableText></Button>
               <Button  justifyContent='flex-start' height={20} >
                 <FontAwesome6 name="user-slash" color="#F7F3FF"size={7} />
                 <SizableText
                  paddingTop={4}
                  fontFamily={'$btn'}
                  size={'$xs'}
                  lineHeight={12}
                  color={'$text-icon-color'}
                  >{menutext3}</SizableText></Button>
         </XStack>
      : null}
        <XStack>
        </XStack>
        </XStack>
)
}