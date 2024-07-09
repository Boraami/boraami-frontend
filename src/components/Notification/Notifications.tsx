import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import UserNotification from "./LikeFollow";
import ReplyNotification from "./Reply";
import QuotedNotification from "./Quoted";

export type Props = {
  iconName: "user-large" | "comment" | "retweet" | "heart";
  displayName: string,
  notificationType: "like" | "follow" | "mention" | "reply" | "repost",
  msg: " liked your post" | " followed you" | " replied to your post" | " mentioned you" | " quoted your post",
  userName: string,
  dateTime: string,
  replyMsg: string,
  quotedUsername: string,
  quotedAvatarText: string,
  quotedDisplayName: string,
  quotedPostText: string,
  quotedPostImg: string,
};

export default function Notifications({
  iconName,
  displayName,
  notificationType,
  userName,
  dateTime,
  replyMsg,
  quotedUsername,
  quotedAvatarText,
  quotedDisplayName,
  quotedPostText,
  quotedPostImg,
}: Props) {
  const getMessage = () => {
    switch (notificationType) {
      case "reply":
        return "\treplied to your post";
      case "like":
        return "\tliked your post";
      case "follow":
        return "\tfollowed you";
      case "mention":
        return "\tmentioned you in a post";
      case "repost":
        return "\tquoted your post";
      default:
        return "";
    }
  };
  const message = getMessage()

  return (
    <SafeAreaView>
      <ScrollView>
        {notificationType === "like" && (
          <UserNotification
            iconName={iconName}
            displayName={displayName}
            userName={userName}
            message={message}
            dateTime={dateTime}
          />
        )}
        {notificationType === "follow" && (
          <UserNotification
            iconName={iconName}
            displayName={displayName}
            userName={userName}
            message={message}
            dateTime={dateTime}
          />
        )}
        {notificationType === "mention" && (
          <UserNotification
            iconName={iconName}
            displayName={displayName}
            userName={userName}
            message={message}
            dateTime={dateTime}
          />
        )}
        {notificationType === "reply" && (
          <ReplyNotification
            iconName={iconName}
            displayName={displayName}
            userName={userName}
            message={message}
            dateTime={dateTime}
            replyMsg={replyMsg}
          />
        )}
        {notificationType === "repost" && (
          <QuotedNotification
            iconName={iconName}
            displayName={displayName}
            userName={userName}
            message={message}
            dateTime={dateTime}
            replyMsg={replyMsg}
            quotedUsername={quotedUsername}
            quotedAvatarText={quotedAvatarText}
            quotedDisplayName={quotedDisplayName}
            quotedPostText={quotedPostText}
            quotedPostImg={quotedPostImg}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
