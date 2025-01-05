import { Search } from "lucide-react";
import { useState } from "react";

interface SearchProps {
  onSearch?: (query: string) => void;
}

export default function SearchImages({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex space-x-2 mx-6">
      <input
        id="searchInput"
        type="text"
        placeholder="Pesquisar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-gray-800 text-white text-sm rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
      />

      <button
        onClick={handleSearch}
        className="flex items-center justify-center bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
}
