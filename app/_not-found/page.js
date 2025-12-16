"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#120805] text-amber-50 px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-amber-200/80 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
