'use client';

type Event = {
  id: number;
  name: string;
  date: string;
};

type EventCardProps = {
  event: Event;
  onDelete: (id: number) => void;
};

export default function EventCard({ event, onDelete }: EventCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4">
      <div>
        <p className="font-semibold">{event.name}</p>
        <p className="text-gray-600 text-sm">{event.date}</p>
      </div>
      <button
        onClick={() => onDelete(event.id)}
        type="button"
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}
