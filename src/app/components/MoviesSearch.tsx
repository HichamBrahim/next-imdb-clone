"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function MoviesSearch() {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    push(`/search/${searchTerm}`);
    setSearchTerm("");
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  return (
    <form className="px-4 py-2 w-full" onSubmit={handleSubmit}>
      <div className="md:mx-24 flex items-center space-x-3">
        <input
          className="flex-1 h-12 border-none outline-none bg-transparent"
          type="search"
          placeholder="Search keywords..."
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
        <span className="text-[#9CA3AF]">Search</span>
      </div>
    </form>
  );
}

export default MoviesSearch;
