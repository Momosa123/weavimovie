import Image from "next/image";
import FormComponent from "./FormComponent";

const HeroSection = () => {
  return (
    <div className="pt-8 md:pt-20 px-7 relative  max-w-4xl mx-auto">
      <h1 className="mb-10 ">
        <span className="text-4xl	mb-4 font-extrabold block bg-green-radial text-transparent bg-clip-text ">
          Welcome to Weavimovie
        </span>
        <span className="text-xl font-bold">
          This is the new way to search for movies you like using{" "}
          <span className="bg-green-gradient text-transparent bg-clip-text">
            AI semantic search.{" "}
          </span>
          With the power of vector embeddings, semantic search helps AI
          understand and interpret the meaning of your query, allowing it to
          find movies that{" "}
          <span className="bg-green-gradient text-transparent bg-clip-text">
            match your interests
          </span>{" "}
          more accurately than traditional keyword search.
        </span>
      </h1>
      <FormComponent />
    </div>
  );
};
export default HeroSection;
