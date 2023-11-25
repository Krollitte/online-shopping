import { TouchableOpacityProps } from "react-native";

import { theme } from "../../themes/theme";
import { Text } from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ButtonContainer } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ margin, title, ...PropsButton }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...PropsButton}>
      <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export { Button };
