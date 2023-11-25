import { useMemo } from "react";
import { TextProps as TextPropsNative } from "react-native";

import { ContainerText } from "./text.styles";
import { textTypes } from "./textTypes";

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

export const Text = ({ color, type, ...textProps }: TextProps) => {
  const handleSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return "32px";
      default:
        return "16px";
    }
  }, [type]);
  return <ContainerText size={handleSize} color={color} {...textProps} />;
};
