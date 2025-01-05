import SearchImages from "./search-images"

interface HeaderProps {
  title: string
  onSearch: (search: string) => void
}

export function Header({ title, onSearch }: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-slate-400 font-bold text-3xl">{title}</h1>
        <SearchImages onSearch={onSearch} />
      </div>
    </header>
  );
}
