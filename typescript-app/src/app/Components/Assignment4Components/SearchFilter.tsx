// 7.Design a search filter component that consists of an input field. As the user types into the input,
//  use controlled components to filter a list of items displayed below. 
// The list should dynamically update to show only items matching the search query.

"use client";

import React, { useState } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Blueberry'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
