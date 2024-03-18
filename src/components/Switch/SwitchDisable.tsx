import { Stack, styled } from '@tamagui/core'
import { createSwitch } from '@tamagui/switch'
import { Label, SizableText, XStack} from 'tamagui'

const Frame = styled(Stack, {

  borderRadius: 20,
  padding:2,
  variants: {
    checked: {
      true: {
        backgroundColor: 'rgba(116, 79, 181, 0.4)',
      },
      false: {
        backgroundColor: 'rgba(194, 160, 255, 0.4)',
      },
    },
  } as const,
  defaultVariants: {
    checked: false,
  },
})

const Thumb = styled(Stack, {
  backgroundColor: 'white',
  borderRadius: 20,
  animation:'medium',
  variants: {
    checked: {
      true: {
        backgroundColor:'#fff',
        opacity:1
      },
      false: {
        backgroundColor: '#fff',
        opacity:0.9

      },
    },
  } as const,
})

export const SwitchDisabled= createSwitch({
  Frame,
  // @ts-ignore (gives error if removed)
  Thumb,
})
type SwSize = {
  [key: string]: {
    w:number;
    h:number,
    thumb:number
  };
};

const SwitchSize: SwSize = {
sm: {
  w:32,
  h:16,
  thumb:12
  },
md: {
  w:40,
  h:20,
  thumb:16
  },
lg: {
  w:48,
  h:24,
  thumb:20
  },
};
type SwitchProps = {
  checked: boolean
  size: string, 
  heading: string,
  helpertext:string
}
type SwitchLabelSizeProps = {
  [key: string]: {
    ls:string,
    ts:number
  };
};
const SwitchLabelSizes: SwitchLabelSizeProps = {
sm: {
  ls:'$xs',
  ts:12
  },
md: {
  ls:'$sm',
  ts:14
  },
lg: {
  ls:'$md',
  ts:16
  },
};
export function SwitchDisable({ size, heading,checked, helpertext}: SwitchProps) {
  return (
    <XStack flexDirection='column' gap={4}/*size gap diff */>
      {heading==''?
        <SwitchDisabled width={SwitchSize[size].w} height={SwitchSize[size].h} disabled checked={checked} >
        <SwitchDisabled.Thumb opacity={0.5} width={SwitchSize[size].thumb} height={SwitchSize[size].thumb}/>
      </SwitchDisabled>
      :
      <>
        <Label
        size={SwitchLabelSizes[size].ls}
        fontFamily={'$heading'}
        color="$disabled-label-text">{heading}</Label>
        <SwitchDisabled width={SwitchSize[size].w} height={SwitchSize[size].h} disabled checked={checked} >
        <SwitchDisabled.Thumb opacity={0.5} width={SwitchSize[size].thumb} height={SwitchSize[size].thumb}/>
      </SwitchDisabled>        
        <SizableText 
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={'$body'}
          fontSize={SwitchLabelSizes[size].ts}
          color="$disabled-helper-text" >{helpertext}</SizableText></>
      }
    </XStack>
  )
}