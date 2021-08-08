import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppConfig } from '~/src/utils/configs/app-config';

const NavHeader = () => {
  const router = useRouter();
  const prevSearchQuery = router.query.search_query;
  const [searchQuery, setSearchQuery] = useState(prevSearchQuery || '');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push({
      pathname: '/search',
      query: { search_query: searchQuery },
    });
  };

  return (
    <nav className="p-2 shadow">
      <div className="xl:container flex items-center justify-center">
        <div className="w-1/5">
          <Link href="/">
            <a className="flex items-center justify-center">
              <span className="block mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </span>
              <span className="sm:block hidden text-black font-bold tracking-tight">
                {AppConfig.site_name}
              </span>
            </a>
          </Link>
        </div>
        <div className="w-4/5 md:w-4/5 lg:w-3/5">
          <div className="relative">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="h-8 p-4 text-sm w-full border"
                placeholder="Search"
                value={searchQuery}
                onInput={handleInput}
              />
              <button
                type="submit"
                className="flex items-center bg-gray-200 hover:bg-gray-300 absolute right-0 top-0 bottom-0 border-l px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
