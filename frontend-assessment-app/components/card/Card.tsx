import Image from "next/image";

export type CardProps = {
  description: string;
  imageUrl: string;
  link: string;
  alt: string;
};
export const Card = ({ description, imageUrl, link, alt }: CardProps) => {
  return (
    <div className="flex flex-col max-w-[440px] h-full bg-white border border-gray-200 rounded-lg shadow-md p-4 box-border">
      <div className="relative w-full md:w-[400px] h-[300px] rounded overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between px-2 py-4 pb-0">
        <p className="mt-2 text-black text-base text-center md:text-lg ">
          {description}
        </p>

        <div className="flex mt-auto justify-center">
          <a
            href={link}
            className="mt-4 py-3 px-4 inline-block text-black border-[3px] font-bold border-black rounded-full hover:bg-gray-100"
          >
            <p className="tracking-extra-wide">READ MORE</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
