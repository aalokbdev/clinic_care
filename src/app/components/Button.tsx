import React from "react";
import Image from "next/image";

interface ButtonType {
  title: string;
  icon: string;
  bg: string; // Tailwind class for background color, e.g., "bg-blue-500"
  color: string; // Tailwind class for text color, e.g., "text-white"
  onClick: () => void;
}

const ButtonBox: React.FC<ButtonType> = ({ title, icon, bg, color, onClick }) => {
  return (
    <div className={`flex justify-center items-center border rounded-md p-2 ${bg} ${color}`} onClick={onClick}>
      <button className="mr-2">{title}</button>
      <Image src={icon} alt="icon" width={20} height={20} />
    </div>
  );
};

export default ButtonBox;
