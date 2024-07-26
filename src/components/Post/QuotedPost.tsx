import { Avatar, SizableText, XStack, Image } from "tamagui";
import Icon from "../Icon/Icon";

export type Props = {
  username: string;
  avatarText: string;
  displayName: string;
  postText: string;
  postImg: string;
};

export default function Post({
  avatarText,
  displayName,
  username,
  postText,
  postImg,
}: Props) {
  return (
    <XStack
      backgroundColor={"$quoted-post-bg-color"}
      paddingBottom={20}
      paddingTop={10}
      paddingLeft={40}
      paddingRight={40}
      width={"100%"}
      flexDirection="column"
      justifyContent="center"
    >
      <XStack flexDirection="row" justifyContent="space-between" alignItems="center">
        <XStack justifyContent="flex-start" alignItems="center">
          <XStack flexDirection="row">
            <Avatar
              circular
              backgroundColor={"$boraami.700"}
              borderWidth={1}
              borderColor={"$boraami.700"}
              width={32}
              height={32}
            >
              <SizableText fontFamily={"$btn"} color={"$mono.50"} size={"$xs"}>
                {avatarText}
              </SizableText>
            </Avatar>
          </XStack>
          <SizableText
            fontFamily={"$heading"}
            color={"$quoted-post-username"}
            size={"$xs"}
            paddingLeft={8}
            lineHeight={18}
          >
            {displayName}
          </SizableText>
          <SizableText
            fontFamily={"$btn"}
            color={"$quoted-post-user-tag"}
            size={"$xs"}
            paddingLeft={4}
          >
            {username}
          </SizableText>
        </XStack>
        <Icon name="ellipsis-vertical" size={12} color="#5F3D9C" />
      </XStack>
      <SizableText
        fontFamily={"$body"}
        size={"$sm"}
        color={"$replied-quoted-text"}
        paddingLeft={3}
        paddingBottom={10}
        paddingTop={10}
        wordWrap="normal"
      >
        {postText}
      </SizableText>
      <Image
        source={{
          uri: postImg,
        }}
        style={{
          alignSelf: "center",
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "$quoted-post-bg-color",
        }}
      />
    </XStack>
  );
}
