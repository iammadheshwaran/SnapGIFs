import { Input } from "./ui/input";

interface Props {
  query: string,
  setQuery: (value: string) => void,
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return (
    <div className="w-full max-w-md mx-auto my-4 px-4">
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search GIFs..."
        className="
          w-full px-5 py-3
          rounded-lg
          border border-transparent
          bg-gray-100
          text-gray-900
          placeholder-gray-400
          shadow-sm
          focus:outline-none
          focus:ring-4 focus:ring-blue-400
          focus:border-blue-500
          transition
          duration-300
          ease-in-out
          hover:bg-white
        "
      />
    </div>
  )
}

export default SearchBar;
