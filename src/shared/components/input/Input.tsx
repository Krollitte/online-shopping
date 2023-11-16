import { TextInputProps } from "react-native";

import { ContainerInput } from "./input.style";

type InputProps = TextInputProps;

const Input = ({ ...TextInputProps }: InputProps) => {
  return <ContainerInput {...TextInputProps} />;
};

export { Input };
