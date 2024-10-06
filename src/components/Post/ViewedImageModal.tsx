import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { XStack, Button, YStack } from "tamagui";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Pressable, Animated, StatusBar, Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import ViewedPostOptionsMenu from "./ViewedPostOptionsMenu";
import PostEngagement from "./PostEngagementBtns";
import ShortAlert from "../Alert/ShortAlert";
import { ImageWithFallback } from "../Image/Image";
import { saveImageToGallery } from "./helpers/helper";

type ImageModalProps = {
  showDialog: boolean;
  setShowDialogue: (show: boolean) => void;
  images: { url: string }[];
  currentIndex: number;
  setOptionsMenu: (show: boolean) => void;
  optionsMenu: boolean;
  dateTime: string;
  modalType: "ViewTLPost" | "ViewDMImg" | "ViewPfp";
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  errors: number[];
};

const ViewedImageModal = ({
  showDialog,
  setShowDialogue,
  images,
  currentIndex,
  setOptionsMenu,
  optionsMenu,
  dateTime,
  modalType,
  setCurrentIndex,
  errors,
}: ImageModalProps) => {
  const [isEngagementVisible, setEngagementVisible] = React.useState(true);
  const [menuAnimation] = useState(new Animated.Value(0.5));
  const [showToast, setShowToast] = useState(false);
  const [toastProps, setToastProps] = useState({ name: "", shade: "", alert: "" });

  const showMenu = () => {
    setOptionsMenu(true);
    Animated.timing(menuAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const hideMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setOptionsMenu(false);
    });
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const successToast = () => {
    setToastProps({
      name: "success",
      shade: "subtle",
      alert: "Image saved!",
    });
    setShowToast(true);
  };

  const errorToast = () => {
    setToastProps({
      name: "warning",
      shade: "subtle",
      alert: "Something went wrong while saving the image :(",
    });
    setShowToast(true);
  };

  return (
    <Modal
      visible={showDialog}
      onRequestClose={() => {
        setShowDialogue(false);
        setOptionsMenu(false);
        setEngagementVisible(true);
      }}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <XStack flex={1} backgroundColor="rgba(0,0,0,1)">
        <StatusBar hidden={true} />
        <XStack flex={1}>
          <XStack flex={1}>
            <ImageViewer
              imageUrls={images}
              renderIndicator={() => <XStack />}
              style={{ flex: 1, width: "100%" }}
              index={currentIndex}
              onSwipeDown={() => setShowDialogue(false)}
              enableSwipeDown={true}
              saveToLocalByLongPress={false}
              onChange={(i) => {
                i && setCurrentIndex(i);
                setShowToast(false);
              }}
              onClick={() => setEngagementVisible(!isEngagementVisible)}
              failImageSource={{
                url: require("../../assets/failed-img.jpg"),
                // url: "https://cdn.dribbble.com/users/27766/screenshots/3488007/media/30313b019754da503ec0860771a5536b.png?resize=400x300&vertical=center", //- links work as well
                width: 350,
                height: 350,
              }} //It works well with renderImage, but if we dont give width height it displays smallest size of image in case of local img file or blank for url so this is required
              renderImage={(props) => {
                return (
                  <XStack jc={"center"} ai={"center"} height={"100%"}>
                    <ImageWithFallback
                      imgSource={
                        props?.source && typeof props.source.uri === "string"
                          ? props.source
                          : require("../../assets/failed-img.jpg")
                      }
                      style={
                        props?.source && typeof props.source.uri === "string"
                          ? props.style
                          : { width: "90%", height: "90%", objectFit: "contain" }
                      }
                    />
                  </XStack>
                );
              }}
            />
          </XStack>
          {isEngagementVisible && (
            <XStack
              position="absolute"
              top={40}
              right={10}
              backgroundColor="rgba(0,0,0,0.7)"
              borderRadius={100}
            >
              <Button
                disabled={errors && errors.includes(currentIndex) ? true : false}
                alignSelf="flex-start"
                onPress={() => {
                  if (optionsMenu) {
                    hideMenu();
                  } else {
                    showMenu();
                  }
                }}
                circular
              >
                <FontAwesome6 name="ellipsis-vertical" size={18} color={"#fff"} />
              </Button>
            </XStack>
          )}
          {optionsMenu && (
            <>
              <ViewedPostOptionsMenu
                hideMenu={hideMenu}
                menuAnimation={menuAnimation}
                data={[
                  {
                    menuText: "Save Image ",
                    iconName: "download",
                    handleAction: () => {
                      saveImageToGallery(
                        images[currentIndex]?.url,
                        setOptionsMenu,
                        successToast,
                        errorToast
                      );
                    },
                  },
                ]}
              />
            </>
          )}
          {isEngagementVisible && (
            <XStack
              position="absolute"
              top={40}
              left={10}
              borderRadius={100}
              backgroundColor="rgba(0,0,0,0.7)"
            >
              <Button alignSelf="flex-start" onPress={() => setShowDialogue(false)} circular>
                <FontAwesome name="chevron-left" size={16} color={"#fff"} />
              </Button>
            </XStack>
          )}
          {showToast && (
            <XStack position="absolute" bottom={70} left={0} right={0} width={50}>
              <ShortAlert
                name={toastProps.name as "default" | "success" | "warning"}
                shade={toastProps.shade as "solid" | "subtle" | "outline"}
                alert={toastProps.alert}
                alertWidth={toastProps.name === "warning" ? "90%" : "35%"}
                noCrossIcon={true}
              />
            </XStack>
          )}
          {modalType === "ViewTLPost" && isEngagementVisible && (
            <YStack
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              paddingHorizontal={20}
              height={60}
              backgroundColor="rgba(0,0,0,0.7)"
            >
              <PostEngagement
                dateTime={dateTime}
                type="ViewedPostImage"
                postEngagementData={{
                  likeCount: 234,
                  repostCount: 234,
                  commentCount: 234,
                }}
              />
            </YStack>
          )}
        </XStack>
      </XStack>
    </Modal>
  );
};

export default ViewedImageModal;
