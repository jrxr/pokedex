import React from "react";

import LottieView from "lottie-react-native";
import load from "./load.json";

import { Container } from "./styles";

export function Load() {
  return (
    <Container>
      <LottieView autoPlay source={load} loop style={{ width: 250 }} />
    </Container>
  );
}
