import React, { useState } from 'react';

const Search = ({ action }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location) {
      action(location);
    }
  };

  return (
    <div className="w-1/2 p-4">
      <div className="flex">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-l-md"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
