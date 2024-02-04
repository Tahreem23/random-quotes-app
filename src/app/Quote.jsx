// Quote.jsx

import React from 'react';
import ReactSocialSharing from 'react-social-sharing';

const Quote = ({ content, author }) => {
  const socialSharingProps = {
    title: `Quote: ${content}`,
    url: 'https://random-quotes-generator.vercel.app',
  };

  return (
    <div className="quote-container">
      <p className="quote-content">{content}</p>
      <p className="quote-author">{author}</p>
      <ReactSocialSharing {...socialSharingProps} />
    </div>
  );
};

export default Quote;
