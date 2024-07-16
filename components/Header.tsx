import Image from "next/image";
import FormComponent from "./FormComponent";
import Link from "next/link";
const Header = () => {
  return (
    <div className="pt-8 md:pt-4 px-7 relative  max-w-4xl mx-auto text-white">
      <h1 className="mb-5">
        <Link href="/" className="w-fit">
          {" "}
          <span className="text-4xl	mb-4 font-extrabold block bg-green-radial text-transparent bg-clip-text ">
            Welcome to Weavimovie
          </span>
        </Link>
        <span className="text-xl ">
          Describe the type of movie you want and we will give you
          recommendation using
          <br />
          <span className="bg-green-gradient text-transparent bg-clip-text font-bold">
            AI semantic search.
          </span>
        </span>
        <div className="flex flex-row justify-center sm:justify-start   items-center gap-3">
          <div className=" text-lg sm:block hidden">powered by</div>
          <a
            className="hover:scale-105 transition-all duration-250"
            href="https://weaviate.io"
            target="_blank"
          >
            <Image
              src="/weaviatelogo.png"
              alt="Weaviate logo"
              width={125}
              height={125}
            />
          </a>
          <div className="text-lg sm:block hidden">Weaviate</div>
        </div>
      </h1>
      <FormComponent />
    </div>
  );
};
export default Header;
