import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

interface IconProps {
    type: "up" | "down";
};

interface ContainerProps{
    type: "up" | "down";
    isActive: boolean;
};

export const Container = styled.View<ContainerProps>`
    width: 38%;
    margin: 0 10px;
    border-width: ${({ isActive }) => isActive ? 0 : 1.5}px; 
    border-color: ${theme.colors.color3};
    border-radius: 10px;
    ${({ isActive, type }) => isActive && type === "up" && css`
        background-color: ${theme.colors.success_light};
    `}
    ${({ isActive, type }) => isActive && type === "down" && css`
        background-color: ${theme.colors.attention_light};
    `}
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.font4_regular};
    font-size: ${RFValue(14)}px;
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3.5px;
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 6px;
    color: ${({ type }) => type === "up" ? "#12A454" : "#E83F5B"}
`;