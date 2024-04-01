import React from "react";
import { Avatar, SizableText, XStack, Button, Separator, ScrollView} from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

export type Props = {
    data:{
        AvatarUsername: string,
        AvatarText: string,
        UserTag: string,
    }[];
};

export default function AvatarUserProfile({data}: Props){
    return(
    <SafeAreaView>
    <ScrollView>
    {data.map((item,i)=>{
            return(
                <XStack
                flexDirection="column"
                key={`${item.AvatarUsername}${item.UserTag}-${i}`}
                padding={8}>
                <XStack
                flexDirection="row"
                justifyContent='space-between'
                gap={16}
                width={'100%'}
                >
                    <XStack
                    gap={5}>
                    <Avatar 
                    circular 
                    backgroundColor={'$avatar-bg-color'}
                    borderWidth={3}
                    width={64}
                    height={64}
                    borderColor={'$avatar-border-color'}>
                    <SizableText
                    fontFamily={'$btn'}
                    color={'$avatar-text'}
                    size={'$xl'}>{item.AvatarText}</SizableText> 
                    </Avatar>
                    <XStack
                    flexDirection="column">
                    <SizableText
                    fontFamily={'$heading'}
                    color={'$avatar-username'}
                    size={'$sm'}
                    paddingTop={8}>{item.AvatarUsername}</SizableText>
                    <SizableText
                    fontFamily={'$body'}
                    color={'$avatar-user-tag'}
                    size={'$xs'}>{item.UserTag}</SizableText>
                    </XStack>
                    </XStack>
                    <XStack
                    paddingTop={12}>
                    <Button
                    width={46}
                    height={21}
                    borderRadius={4}
                    borderColor={"$secondary-button-border"}
                    paddingTop={3}
                    paddingBottom={4}
                    paddingLeft={4}
                    paddingRight={4}
                    gap={6}  
                    > 
                    <SizableText
                    fontFamily={'$btn'}
                    color={'$tertiary-default-text'}
                    size={'$xs'}>Follow</SizableText></Button>
                    </XStack>

                </XStack>
                <Separator paddingTop={12} borderColor={'$avatar-divider'}/>
            </XStack>
            );
        })}
    </ScrollView>
    </SafeAreaView>    
    )
}