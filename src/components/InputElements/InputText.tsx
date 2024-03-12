interface InputTextProps {
  label: string;
  placeholder?: string;
  required: boolean;
  disabled: boolean;
  type: "email" | "password" | "text" | "number";
}

function InputBox({
  label,
  placeholder,
  required,
  disabled,
  type,
}: InputTextProps) {
  return (
    <div className="mb-1">
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        className="bg-white border border-[#D8DADA] border-b-black text-gray-900 text-sm  block w-full p-2.5 rounded-sm disabled:bg-[#E2E3E4]"
        placeholder={placeholder ?? ""}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default InputBox;
