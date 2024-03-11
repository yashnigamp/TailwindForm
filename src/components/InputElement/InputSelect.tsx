import React, { ReactNode, useState } from "react";

interface Props {
  label: string;
  options: string[];
  required: boolean;
  disabled: boolean;
  children?: ReactNode;
}

const InputSelect = ({
  label,
  options = [],
  required,
  disabled,
  children,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //   const options = ["Python", "Javascript", "Node", "PHP"];

  const handleOptionClick = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="mb-1">
        <label
          htmlFor="select"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <div className={`relative ${disabled && "bg-[#E2E3E4]"}`}>
          <div
            className=" flex  border border-[#D8DADA] border-b-black text-gray-900 text-sm  block w-full p-2.5 rounded-sm
          "
            onClick={toggleDropdown}
          >
            <input
              value={selectedOption}
              name="select"
              id="select"
              className="pr-4  appearance-none outline-none text-gray-800 w-full cursor-pointer "
              readOnly
              required={required}
              disabled={disabled}
            />

            {!disabled && (
              <label
                htmlFor="show_more"
                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
              >
                <svg
                  className={`w-4 h-4 mx-2 fill-current ${
                    !isDropdownOpen ? "-rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </label>
            )}
          </div>

          {isDropdownOpen && (
            <div className="absolute rounded shadow bg-white overflow-hidden flex flex-col w-full mt-1 border border-gray-200">
              {options.map((option) => (
                <div
                  key={option}
                  className="cursor-pointer group border-t"
                  onClick={() => handleOptionClick(option)}
                >
                  <a
                    className={`block p-2 border-transparent border-l-4 group-hover:border-red-100 group-hover:bg-gray-100 ${
                      option === selectedOption ? "border-red-600" : ""
                    }`}
                  >
                    {option}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InputSelect;
