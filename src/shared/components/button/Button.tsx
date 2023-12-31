import { TouchableOpacityProps } from "react-native";

import { theme } from "../../themes/theme";
import { Text } from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ButtonContainer, ButtonSecondary, GradientButton } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ margin, title, type, ...PropsButton }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...PropsButton}>
          <Text type={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer margin={margin} {...PropsButton}>
          <GradientButton
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
          >
            <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
              {title}
            </Text>
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export { Button };
