import Image from "next/image";
import FormComponent from "./FormComponent";
import Link from "next/link";
const Header = () => {
  return (
    <div className="pt-8 md:pt-18 px-7 relative  max-w-4xl mx-auto mb-10 text-white">
      <h1 className="mb-10">
        <Link href="/" className="w-fit">
          {" "}
          <span className="text-4xl	mb-4 font-extrabold block bg-green-radial text-transparent bg-clip-text ">
            Welcome to Weavimovie
          </span>
        </Link>
        <span className="text-xl ">
          This is the new way to search for movies you like using{" "}
          <span className="bg-green-gradient text-transparent bg-clip-text font-bold">
            AI semantic search.{" "}
          </span>
        </span>
      </h1>
      <FormComponent />
    </div>
  );
};
export default Header;
