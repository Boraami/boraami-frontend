import { Label, RadioGroup, XStack, YStack } from 'tamagui'
import { FontAwesome } from '@expo/vector-icons';
export function RadioButton(props:{disable?: boolean,labeltext: string,value: string, size: string
  disable2?: boolean,labeltext2: string,value2: string, size2: string}) {
    return (
      <RadioGroup aria-labelledby="Select one item" defaultValue="1" name="form">
        <YStack alignItems="center">
          <RadioGroupItemWithLabel value={props.value} labeltext={props.labeltext} size={props.size} disable={props.disable} />
          <RadioGroupItemWithLabel value={props.value2} labeltext={props.labeltext2} size={props.size2} disable={props.disable2} />
        </YStack>
      </RadioGroup>
    )
  }
  
  export function RadioGroupItemWithLabel(props: {
                                    value: string
                                    disable?: boolean,
                                    size: string, 
                                    labeltext: string
                                  }) {
console.log(props.size)
console.log(props.disable)
var rwh=0;
var ls='';
var ris= 0;
var dris=0;

if(props.size=='sm'){
  rwh=12
  ls='$md'
  ris=6
  dris=5.5
  console.log(rwh,ls,ris)
} else if(props.size=='md'){
  rwh=16
  ls='$lg'
  ris=8.5
  dris=9.5
  console.log(rwh,ls,ris)
} else if(props.size=='lg'){
  rwh=20
  ls='$xl'
  ris=10
  dris=12
  console.log(rwh,ls,ris)
}else{
  console.log('size arguments not correct')
}
    return (
      <XStack>
        {props.disable?
        <YStack alignItems="center" flexDirection='row' gap={8}>
        <RadioGroup.Item
         borderColor={"rgba(95,61,156,0.3)"}
         disabled={true}
         value={props.value} 
         borderWidth={2}
         width={rwh}
         height={rwh}
         >
          <RadioGroup.Indicator alignItems='center' justifyContent='center' >
           <FontAwesome name="circle" size={dris} color={"#5F3D9C"} 
           style={{marginTop:-5.6, marginRight:-3, marginBottom:-6, marginLeft:-3, opacity:0.5}}/*to position*/ />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
        <Label 
        opacity={0.4}
        size={ls}
        fontFamily={'$body'}
        color='$default-radio-text'>
          {props.labeltext}
        </Label>
      </YStack>
      :
      <YStack flexDirection='row'  alignItems="center" gap={8}>
        <RadioGroup.Item
         borderColor={"#5F3D9C"}         
         value={props.value} 
         borderWidth={1.2}
         width={rwh}
         height={rwh}
         focusStyle={{
          borderWidth:2,
          borderColor:'$focus-radio-border',
        }}
        hoverStyle={{
          borderWidth:2,
          borderColor:'$serendipity.500',
        }}
         >
          <RadioGroup.Indicator  alignItems='center' justifyContent='center' >
           <FontAwesome name="circle" size={ris} color={"#5F3D9C"} 
           style={{
            marginTop:-6.2, 
            marginRight:-5, 
            marginBottom:-6, 
            marginLeft:-4.9,}}/*to position*/ />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
        <Label 
        size={ls}
        fontFamily={'$body'}
        color='$default-radio-text'>
          {props.labeltext}
        </Label>
      </YStack>
      }
      
      </XStack>
    )
  }