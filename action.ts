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
      limit: 4,
      returnMetadata: ["distance"],
    }
  );
  client.close();
  const result: SimilarMovie[] = objects.map(item => ({
    ...item.properties,
    similarity: item.metadata?.distance,
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
  let result: Movie[] = [];
  for await (let item of myCollection.iterator()) {
    result.push(item.properties);
    if (result.length === count) break;
  }
  client.close();

  return result;
}
