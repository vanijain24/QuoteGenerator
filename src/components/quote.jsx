// src/Quote.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [quoteData, setQuoteData] = useState({ content: "", author: "" });

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuoteData({ content, author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <p className="quote-text">"{quoteData.content}"</p>
      <p className="quote-author">- {quoteData.author}</p>
      <button onClick={fetchQuote} className="new-quote-button">
        New Quote
      </button>
    </div>
  );
}

export default Quote;
