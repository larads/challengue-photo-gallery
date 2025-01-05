import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <Frown className="text-gray-400 w-32 h-32"/>
      <text className="text-gray-400 text-lg">Nenhuma foto encontrada</text>
    </div>
  );
}
