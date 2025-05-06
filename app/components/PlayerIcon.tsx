import React from "react";
import { IconType } from "react-icons";

interface PlayerIconProps {
  icon: IconType;
}

const PlayerIcon = ({ icon: Icon }: PlayerIconProps) => {
  return (
    <button>
      <Icon className=" hover:bg-white/20 rounded-md" />
    </button>
  );
};

export default PlayerIcon;
