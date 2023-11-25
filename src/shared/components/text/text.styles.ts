import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  size: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
  color: ${({ color }: ContainerTextProps) => (color ? `${color}` : "")};
  font-size: ${({ size }: ContainerTextProps) => size};
  font-family: Poppins-Bold;
`;
