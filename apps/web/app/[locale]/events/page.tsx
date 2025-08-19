'use client';

import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import InputField from '../components/InputField';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';

type Event = {
  id: number;
  name: string;
  date: string;
};

const STORAGE_KEY = 'events';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  // Load events from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    }
  }, [events]);

  const handleAddEvent = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date) return;

    setEvents([...events, { id: Date.now(), name: name.trim(), date }]);

    setName('');
    setDate('');
    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    const updated = events.filter((event) => event.id !== id);
    setEvents(updated);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 font-bold text-3xl">Events</h1>

      <SearchBar
        value={search}
        onChange={setSearch}
        onAddClick={() => setShowModal(true)}
      />

      <div className="space-y-3">
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500">No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onDelete={handleDelete} />
          ))
        )}
      </div>

      {showModal && (
        <Modal title="Add Event" onClose={() => setShowModal(false)}>
          <form onSubmit={handleAddEvent} className="space-y-4">
            <InputField
              label="Event Name"
              value={name}
              onChange={setName}
              required
            />
            <InputField
              label="Date"
              type="date"
              value={date}
              onChange={setDate}
              required
            />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg border px-4 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
