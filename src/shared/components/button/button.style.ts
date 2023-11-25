import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

import { theme } from "../../themes/theme";

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: blue;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }: ButtonContainerProps) => (margin ? ` ${margin}` : 0)};
`;
export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;

  border-radius: 4px;
  background-color: blue;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }: ButtonContainerProps) => (margin ? ` ${margin}` : 0)};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  margin: ${({ margin }: ButtonContainerProps) => (margin ? ` ${margin}` : 0)};
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;
