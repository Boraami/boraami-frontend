import { Avatar, SizableText, XStack, Image} from "tamagui";
import Icon from "../Icon/Icon";

export type Props = {
    quotedUsername: string,
    quotedAvatarText: string,
    quotedDisplayName: string,
    quotedPostText: string,
    quotedPostImg: string,
};

export default function QuotedPost({quotedAvatarText,quotedDisplayName,quotedUsername,quotedPostText,quotedPostImg}: Props){
    return(
        <XStack 
        backgroundColor={"$quoted-post-bg-color"}
        paddingBottom={20}
        paddingTop={10}
        paddingLeft={40}
        paddingRight={40}
        flexDirection="column"
        justifyContent="center"
        alignContent="center">
            <XStack flexDirection="row"  justifyContent='space-evenly'>
            <XStack flexDirection="row" >
            <Avatar 
            circular 
            backgroundColor={'$boraami.700'}
            borderWidth={1}
            borderColor={'$boraami.700'}
            width={32}
            height={32}>
            <SizableText
              fontFamily={'$btn'}
              color={'$mono.50'}
              size={'$xs'}>{quotedAvatarText}</SizableText> 
            </Avatar>
            </XStack>
            <SizableText
              fontFamily={'$heading'}
              color={'$quoted-post-username'}
              size={'$xs'}
              paddingTop={16}>{quotedDisplayName}</SizableText>
            <SizableText
              fontFamily={'$btn'}
              color={'$quoted-post-user-tag'}
              size={'$xs'}
              paddingLeft={1}
              paddingTop={16}>{quotedUsername}</SizableText>
            <Icon name="ellipsis-vertical" style={{paddingTop:17}} size={12} color="#5F3D9C"/>
            </XStack>
            <SizableText
            fontFamily={'$body'}
            size={'$sm'}
            color={'$replied-quoted-text'}
            paddingLeft={3}
            paddingBottom={10}
            paddingTop={10}
            wordWrap='normal'
            selectable>{quotedPostText}</SizableText>
            <Image
            source={{
                uri: quotedPostImg,
            }}
            style={{
                borderRadius:4,
                borderWidth:1,
                borderColor: '$quoted-post-bg-color',
            }}
            resizeMode={'contain'}
            />
        </XStack>
    )
}