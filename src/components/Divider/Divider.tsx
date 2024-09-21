import React from "react";
import { Separator, ViewProps } from "tamagui";

const Divider = ({ borderColor = "$divider-subtle", ...rest }: ViewProps) => {
  return (
    <Separator
      borderColor={
        borderColor === "subtle"
          ? "$divider-subtle"
          : borderColor === "strong"
          ? "$divider-strong"
          : borderColor
      }
      {...rest}
    />
  );
};

export default Divider;
