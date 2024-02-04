// Index.jsx
"use client"

import React, { useState } from 'react';
import Quote from '../Quote';
import { fetchRandomQuote } from '../api';

const AppIndex = () => {
  const [quote, setQuote] = useState<Quote>(null);

  const handleRefreshQuote = async () => {
    const newQuote = await fetchRandomQuote();
    setQuote(newQuote);
  };

  return (
    <div className="container">
      {quote && <Quote content={quote.content} author={quote.author} />}
      <button onClick={handleRefreshQuote}>New Quote</button>
    </div>
  );
};

export default AppIndex;
