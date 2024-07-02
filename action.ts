import weaviate from "weaviate-client";
import { SimilarMovie } from "./types";
import { Movie } from "./types";
const openaiApiKey = process.env.OPENAI_API_KEY || "";

export async function findMovies(query: string) {
  const client = await weaviate.connectToWeaviateCloud(
    process.env.WCD_URL, // Replace with your instance URL
    {
      authCredentials: new weaviate.ApiKey(process.env.WCD_API_KEY),
      headers: {
        "X-OpenAI-Api-Key": openaiApiKey,
      },
    }
  );

  const collectionName = "MoviesCollection";
  const myCollection = client.collections.get<Movie>(collectionName);

  const { objects } = await myCollection.query.nearText(
    query, // The model provider integration will automatically vectorize the query
    {
      limit: 6,
      returnMetadata: ["distance"],
    }
  );
  client.close();
  const result: SimilarMovie[] = objects.map(item => ({
    ...item.properties,
    similarity: item.metadata?.distance,
    uuid: item.uuid,
  }));
  return result;
}

export async function getMovies(count: number) {
  "use server";
  const client = await weaviate.connectToWeaviateCloud(
    process.env.WCD_URL, // Replace with your instance URL
    {
      authCredentials: new weaviate.ApiKey(process.env.WCD_API_KEY),
      headers: {
        "X-OpenAI-Api-Key": openaiApiKey,
      },
    }
  );

  const collectionName = "MoviesCollection";
  const myCollection = client.collections.get<Movie>(collectionName);
  // console.log(myCollection);
  let result: Movie[] = [];
  for await (let item of myCollection.iterator()) {
    const movie = {
      ...item.properties,
      uuid: item.uuid,
    };
    result.push(movie);
    if (result.length === count) break;
  }
  client.close();

  return result;
}

export async function getMovieById(id: string) {
  "use server";
  const client = await weaviate.connectToWeaviateCloud(
    process.env.WCD_URL, // Replace with your instance URL
    {
      authCredentials: new weaviate.ApiKey(process.env.WCD_API_KEY),
      headers: {
        "X-OpenAI-Api-Key": openaiApiKey,
      },
    }
  );

  const collectionName = "MoviesCollection";
  const myCollection = client.collections.get<Movie>(collectionName);
  const response = await myCollection.query.fetchObjectById(id);
  client.close();
  const movie = {
    ...response?.properties,
    uuid: response?.uuid,
  };
  console.log(response);
  return movie;
}
