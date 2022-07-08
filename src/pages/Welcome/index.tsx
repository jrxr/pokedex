import React from "react";

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
        <Button onPress={() => {}}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Bottom>
    </Container>
  );
}
