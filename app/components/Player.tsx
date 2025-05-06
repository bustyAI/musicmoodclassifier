import React from "react";
import Image from "next/image";

// Components
import PlayerIcon from "./PlayerIcon";

// Icons
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";

const Player = () => {
  return (
    <div className="flex rounded-md bg-[#2a2a2a]">
      <div className="flex flex-col items-center">
        <div className="relative w-full h-[200px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[370px] rounded-md mb-4">
          <Image
            className="rounded-md"
            src={"/dom_doola.jpg"}
            fill
            alt="Album cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col m-4 justify-center text-lg md:text-4xl">
          <h5>Dreamin(ft.Doya)</h5>
          <p className=" text-gray-300 mt-1 mb-6 text-sm md:text-xl">
            Dom Dolla
          </p>
          <div className="flex flex-row justify-between mt-8 text-2xl md:text-4xl">
            <PlayerIcon icon={MdSkipPrevious} />
            <PlayerIcon icon={IoMdPlay} />
            <PlayerIcon icon={MdSkipNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
