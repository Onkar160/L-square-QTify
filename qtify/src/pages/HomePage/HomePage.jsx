import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router";
import Section from "../../components/Section/Section";
// import {useState} from "react";

export default function HomePage() {
  const { topAlbums, newAlbums, songs, genres } = useOutletContext();
//   console.log(topAlbums);

  return (
    <>
      <Hero />
      <Section topAlbums={topAlbums} />
    </>
  );
}
