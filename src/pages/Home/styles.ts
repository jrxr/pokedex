import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background: #cc2e3a;
    flex: 1;

    position: relative;
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    margin-left: -20px;
    height: 150px;
    background: #cc2e3a;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: black;
    font-size: 40px;
    line-height: 38px;
    font-weight: bold;
    margin-top: -70px;
    margin-left: 25%;
  `}
`;
