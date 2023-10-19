// Keeping state in the url has many benefits
// - users can shre the url on chat and social media an instatly get the same UI
// - users can bookmark the url and get the same UI
// - users can also use the back/forward button to revert the state
// - users can open the url in a new tab / window and get the same UI
// - users can refresh the page and get the same UI
// - users will be able to manipulte the URL to get the UI the way they want
// - SEO ranking
// - if viewing the site from a social app, users can move to their browser and get the same UI
// - can be done on the client and server side

import blackShirt from "@/public/img/blackShirt.jpeg";
import whiteShirt from "@/public/img/whiteShirt.jpeg";
import slateShirt from "@/public/img/slateShirt.jpeg";
import brownShirt from "@/public/img/brownShirt.jpeg";

import Image from "next/image";
import Link from "next/link";

const imgUrls = {
  black: blackShirt,
  white: whiteShirt,
  slate: slateShirt,
  brown: brownShirt,
};

const colorVariants = ["black", "white", "brown", "slate"];
const sizeVariants = ["xs", "s", "m", "l", "xl"];

function StateURLExample({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedColor = (searchParams.color || "black") as string;
  const selectedSize = (searchParams.size || "xs") as string;

  return (
    <section className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white flex items-center w-[96%] rounded min-h-[75vh]">
        <div className="flex-[2] flex justify-center">
          <Image
            /// @ts-ignore
            src={imgUrls[selectedColor]}
            alt="shirt_variant"
            width={622}
            height={550}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">Basic Heavyweight T-Shirt</h1>
          <section className="bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10">
            $22.00
          </section>

          <section className="mb-5">
            <h2 className="text-md uppercase mb-2">Color</h2>
            <div className="flex gap-2">
              {colorVariants.map((color, index) => (
                <Link
                  key={index}
                  href={`?color=${color}&size=${selectedSize}`}
                  className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-md uppercase mb-2">Size</h2>
            <div className="flex gap-2">
              {sizeVariants.map((size, index) => (
                <Link
                  key={index}
                  href={`?color=${selectedColor}&size=${size}`}
                  className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                    selectedSize === size
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  {size.toUpperCase()}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default StateURLExample;
