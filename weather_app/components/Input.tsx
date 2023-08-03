"use client";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 ">
      <input
        type="text"
        className="w-full p-5 outline-none rounded-full shadow-lg shadow-green-500/50 text-black"
        placeholder="Search..."
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
};

export default Input;
