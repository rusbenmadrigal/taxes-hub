import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-70">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt="author.name"
          unoptimized
          height="100"
          width="100"
          className="rounded-full mx-auto"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-black my-1 text-xl font-bold">{author.name}</h3>
      <p className="text-gray text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
