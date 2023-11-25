import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  size: string;
  fontFamily: "Poppins-Bold" | "Poppins-Light" | "Poppins-Regular";
}

export const ContainerText = styled.Text<ContainerTextProps>`
  color: ${({ color }: ContainerTextProps) => (color ? `${color}` : "")};
  font-size: ${({ size }: ContainerTextProps) => size};
  font-family: ${({ fontFamily }: ContainerTextProps) => fontFamily};
`;
