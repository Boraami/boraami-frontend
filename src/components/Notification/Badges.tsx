import { XStack,Text} from "tamagui";
type BadgeSizeProps = {
    [key: string]: {
      w: number;
      h: number;
    };
  };
  
const badgeSizes: BadgeSizeProps = {
  sm: {
      w:8,
      h:8,
    },
  md: {
      w:12,
      h:12,
    },
  lg: {
      w:28,
      h:28,
    },
  };
  
type Props = {
  color: string
  size: string, 
  count: number
}
export default function Badge({ color, size, count }: Props){
//font changed from 14->12 to adjust the design look according to design files
let c;
if(count>20){
    c='+'
    count=20
}else if(count<1){
    count=0
}
    return(
        <>
        {size=='lg'?
        <XStack 
        width={badgeSizes[size].w}
        height={badgeSizes[size].w}
        borderRadius={20}
        backgroundColor={color}
        justifyContent="center"
        alignItems="center">
            <Text
            fontFamily={'$btn'}
            fontSize={'$sm'}
            fontWeight={'500'}
            lineHeight={14}
            paddingTop={4}
            color={'$large-badge-text'}
            >{count}{c}</Text>
        </XStack>
        :
        <XStack 
        width={badgeSizes[size].w}
        height={badgeSizes[size].w}
        borderRadius={20}
        backgroundColor={color}>
        </XStack>
    }
    </>  
    )
}