import React, { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';

import { Card } from '../../components/Card';
import { Load } from '../../components/Load';

import pokeballImage from '../../assets/img/pokeball.png';

import api from '../../services/api';

import { LoadingScreen, Container, Header, Title } from './styles';

type PokemonType = {
  type: {
    name: string;
  };
};

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [load, setLoad] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      try {
        const response = await api.get('/pokemon');
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfoAboutPokemonsByUrl(
              pokemon.url,
            );

            return {
              name: pokemon.name,
              id,
              types,
            };
          }),
        );

        setPokemons(payloadPokemons as Pokemon[]);
      } catch (err) {
        Alert.alert('ops, algo de errado aconteceu, tente mais tarde');
      } finally {
        setLoad(false);
      }
    }

    getPokemons();
  }, []);

  async function getMoreInfoAboutPokemonsByUrl(url: string): Promise<Request> {
    const response = await api.get(url);

    const { id, types } = response.data as Request;

    return { id, types };
  }

  return load ? (
    <LoadingScreen>
      <Load />
    </LoadingScreen>
  ) : (
    <>
      <Container>
        <FlatList
          ListHeaderComponent={
            <>
              <Header source={pokeballImage} />
              <Title> Pokédex</Title>
            </>
          }
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          data={pokemons}
          keyExtractor={pokemon => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pokemon }) => (
            <Card data={pokemon} onPress={() => {}} />
          )}
        />
      </Container>
    </>
  );
}