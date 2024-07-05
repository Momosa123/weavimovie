# WeaviMovie

This web application recommends movies based on user queries. Relevant movies are identified using the Weaviate client with vector embeddings. Initially, a Weaviate database was created by vectorizing movie information such as overviews, genres, and release dates. The OpenAI model is employed for vectorization. When searching for a movie, the NearText operator calculates the distance between the query vector and the movie vectors. Movies with lower distance values are then returned. To learn more about the usage of AI databases, visit Weaviate.
