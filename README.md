# WeaviMovie

This web application proposes movies based on the user query.  Relevant movies are found using Weaviate client with vector embeddings.
In the first step, a database was created by vectorizing movie info like overview, genres, and release date. OPENAI model is used for different functions like vectorizing.
When looking for a movie, the NearText operator determines the distance between the query vector and the movie vector. Movies with lower distance values are then returned.
To learn more about the usage of AI databases https://weaviate.io/
