import { XStack,Text} from "tamagui";

export function Badge(props:{size: string, text: string}){
var w=0
var h=0
if(props.size=='sm'){
    w=8
    h=8
} else if(props.size=='md'){
    w=12
    h=12
} else if(props.size=='lg'){
    w=28
    h=28
}else{
    console.log('size incorrect')
}
//font changed from 14->12 to adjust the design look according to design files
    return(
        <>
        {props.size=='lg'?
        <XStack 
        width={w}
        height={h}
        borderRadius={20}
        backgroundColor={"$badge-bg-color"}
        justifyContent="center"
        alignItems="center">
            <Text
            fontFamily={'$btn'}
            fontSize={'$sm'}
            fontWeight={'500'}
            lineHeight={14}
            paddingTop={4}
            color={'$large-badge-text'}
            >{props.text}</Text>
        </XStack>
        :
        <XStack 
        width={w}
        height={h}
        borderRadius={20}
        backgroundColor={"$badge-bg-color"}>
        </XStack>
    }
    </>  
    )
}