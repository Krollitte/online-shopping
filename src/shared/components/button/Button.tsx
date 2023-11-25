import { TouchableOpacityProps } from "react-native";

import { theme } from "../../themes/theme";
import { Text } from "../text/Text";
import { ButtonContainer } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ margin, title, ...PropsButton }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...PropsButton}>
      <Text color={theme.colors.neutralTheme.white}>{title}</Text>
    </ButtonContainer>
  );
};

export { Button };
