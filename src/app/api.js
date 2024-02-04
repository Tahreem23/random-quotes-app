// api.js

import axios from 'axios';

const API_URL = 'https://api.quotable.io/random';

export async function fetchRandomQuote(): Promise<Quote> {
  const response = await axios.get(API_URL);
  const quoteData = response.data;
  return {
    content: quoteData.content,
    author: quoteData.author,
  };
}
