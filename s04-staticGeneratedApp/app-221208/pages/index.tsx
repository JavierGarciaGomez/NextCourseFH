import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

import { GetStaticProps } from "next";
import pokeApi from "../api/pokeApi";
import { IPokemonListResponse, ISmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: ISmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<IPokemonListResponse>(
    "/pokemon?limit=151"
  );

  const pokemons: ISmallPokemon[] = data.results.map((pokemon, index) => ({
    id: index + 1,
    url: pokemon.url,
    name: pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
};
export default HomePage;
