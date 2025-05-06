import React from "react";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import Image from "next/image";

const Player = () => {
  return (
    <div className="flex rounded-md bg-[#2a2a2a]">
      <div className="flex flex-row ">
        <div className="flex flex-col p-4 justify-center ">
          <h5>Dreamin(ft.Doya)</h5>
          <p className=" text-gray-200 text-sm">Dom Dolla</p>
          <div className="flex flex-row space-x-2 mt-4 text-2xl">
            <MdSkipPrevious />
            <IoMdPlay />
            <MdSkipNext />
          </div>
        </div>
        <div className="relative rounded-md">
          <Image
            className="rounded-md"
            src={"/dom_doola.jpg"}
            height={150}
            width={150}
            alt="Album cover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
