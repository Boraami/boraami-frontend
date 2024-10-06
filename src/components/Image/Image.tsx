import { Image, ImageProps } from "expo-image";
import React, { useState } from "react";

type CustomImageProps = ImageProps & {
  imgSource: { uri: string };
};

export const ImageWithFallback = ({ imgSource, ...props }: CustomImageProps) => {
  const [error, setError] = useState<boolean>(false);
  const fallbackImg = require("../../assets/failed-img.jpg");
  console.log(imgSource);
  const handleError = () => {
    setError(true);
  };
  return (
    <Image
      source={error ? fallbackImg : imgSource}
      onError={handleError} // Trigger handleError if the primary image fails to load
      // placeholder={{
      //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6OSkMVt7i1BRqfbWDG0qhrM0SMhF0cXOfg&s",
      // }} // this works but looks odd maybe we can use png or something for loading
      transition={100}
      {...props}
    />
  );
};
