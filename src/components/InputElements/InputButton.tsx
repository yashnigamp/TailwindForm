import React from "react";
interface InputButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  styleClass?: "primary" | "secondary";
  disabled?: boolean;
}
function InputButton({
  label,
  type = "button",
  styleClass = "secondary",
  disabled = false,
}: InputButtonProps) {
  const buttonStyle =
    styleClass === "primary" ? "bg-black text-white" : "bg-white text-gray-900";
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${buttonStyle} border-[1.5px] border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-4 py-1.5 me-2 `}
    >
      {label}
    </button>
  );
}

export default InputButton;
