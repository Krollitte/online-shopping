import { Text, TouchableOpacityProps } from "react-native";

import { ButtonContainer } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ margin, title, ...PropsButton }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...PropsButton}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export { Button };
