import React from "react";
import { Button, Spinner } from "tamagui";

type Props = {
  size: "small" | "large" ; 
  spinnerColor: string;
  iconColor: string;
};

// Sizes: Spinner is an extension of React Native ActivityIndicator (only accepts size small or large)

// const loadingSizes: Props = {

//   small: {
//       width: 12,
//       height: 13, 
//   },
//   large: {
//       width: 22,
//       height: 20, 
//   }
// }

export const Loading = ({ size, spinnerColor, iconColor }: Props) => {

  return (
    <Spinner size={size} color={spinnerColor}/>
  );
};
