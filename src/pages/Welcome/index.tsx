import React from "react";
import { useNavigation } from '@react-navigation/native';

import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from "./pokemon.json";

import {
  Container,
  Content,
  WrapperIcon,
  IconContent,
  Title,
  SubTitle,
  Button,
  Bottom,
  ButtonText,
} from "./styles";

export function Welcome() {
  const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate('Home');
  }

  return (
    <Container>
      <Content>
        <WrapperIcon>
          <IconContent>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
          </IconContent>
        </WrapperIcon>

        <Title>Pokédex</Title>
        <SubTitle>Encontre todos os pokémons em um só lugar</SubTitle>
      </Content>

      <Bottom>
        <Button onPress={handleNavigateToHome}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Bottom>
    </Container>
  );
}
