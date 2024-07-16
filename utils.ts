import { Movie } from "./types";
import { getPlaiceholder } from "plaiceholder";

const shuffleArray = (array: Movie[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

async function getBlurData(src: string) {
  const buffer = await fetch(src).then(async res =>
    Buffer.from(await res.arrayBuffer())
  );

  const data = await getPlaiceholder(buffer);
  return data;
}

export { getBlurData, shuffleArray };
