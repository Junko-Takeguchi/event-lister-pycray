'use client';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onAddClick: () => void;
};

export default function SearchBar({
  value,
  onChange,
  onAddClick,
}: SearchBarProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <input
        type="text"
        placeholder="Search events by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onAddClick}
        type="button"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Add Event
      </button>
    </div>
  );
}
