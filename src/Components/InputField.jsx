const InputField = ({ inputName, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={inputName} className="block mb-2">
        {inputName}
      </label>
      <div className="relative">
        <input
          required
          id={inputName}
          type={type}
          placeholder={placeholder}
          className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
        />
      </div>
    </div>
  );
};

export default InputField;
