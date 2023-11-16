import styled from "styled-components/native";

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

  ${({ margin }: ButtonContainerProps) => margin && `margin: ${margin}`}
`;
