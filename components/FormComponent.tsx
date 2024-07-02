import { redirect } from "next/navigation";
import React from "react";

const FormComponent = () => {
  async function searchAction(formData: FormData) {
    "use server";

    const query = formData.get("queryInput") as string;

    redirect(`/search/${query}`);
  }

  return (
    <form action={searchAction} className="width-full flex">
      <input
        name="queryInput"
        className="border-solid px-2.5 border-2 border-indigo-green grow h-12 z-10  rounded-full text-stone-500	"
        type="text"
      />
      <button className="h-12 z-10 px-6 absolute rounded-full right-7 bg-green-gradient">
        Search
      </button>
    </form>
  );
};
export default FormComponent;
