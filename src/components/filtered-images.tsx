import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (days: number) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [selected, setSelected] = useState<number>(3);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const days = parseInt(event.target.value, 10);
    setSelected(days);
    onFilterChange(days);
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="filter" className="text-slate-400 font-medium mr-5 ml-7">
        Selecionar período:
      </label>
      <select
        id="filter"
        value={selected}
        onChange={handleSelectChange}
        className="bg-gray-800 ml-5 text-slate-400 rounded-md px-4 py-2"
      >
        <option value={3}>3 dias</option>
        <option value={5}>5 dias</option>
        <option value={7}>7 dias</option>
      </select>
    </div>
  );
}
