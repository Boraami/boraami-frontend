import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { requestMediaLibraryPermission } from "./permissions";

export const saveImageToGallery = async (
  imageUrl: string,
  setOptionsMenu: (show: boolean) => void,
  successToast: () => void,
  errorToast: () => void
) => {
  setOptionsMenu(false);
  try {
    const { hasPermission, limitedAccess } = await requestMediaLibraryPermission();
    if (!hasPermission || limitedAccess) {
      return;
    } // Exit if permission is not granted
    //Downloading the image to the cache directory
    const currentTime = new Date();
    const timeStamp = currentTime.getTime();
    const localFilePath = `${FileSystem.cacheDirectory}boraami_image_${timeStamp}.jpg`; // Temporary file path
    const downloadResult = await FileSystem.downloadAsync(imageUrl, localFilePath);
    if (downloadResult.status === 200) {
      //Saving the downloaded image to the gallery
      await MediaLibrary.createAssetAsync(downloadResult.uri);
      //Now delete the temporary files after saving(android)
      await FileSystem.deleteAsync(downloadResult.uri, { idempotent: true });
      successToast();
    } else {
      throw new Error(`Failed to download image. Status code: ${downloadResult.status}`);
    }
  } catch (error) {
    console.error("Error saving image:", error);
    errorToast();
  }
};
