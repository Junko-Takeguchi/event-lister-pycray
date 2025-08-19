'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl space-y-6 text-center">
        <h1 className="font-bold text-4xl text-gray-800">
          Welcome to Event Manager
        </h1>
        <p className="text-gray-600 text-lg">
          Easily create, search, and manage your events in one place.
        </p>

        <div className="flex justify-center">
          <Link
            href="/events"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-lg text-white shadow transition hover:bg-blue-700"
          >
            Go to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
