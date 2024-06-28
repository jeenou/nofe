// ContentBlock.js
import React from 'react';
import "./ContentBlock.css"; // Import styles specific to the content block

const ContentBlock = ({ children }) => {
  return (
    <div className="content-block">
      {children}
    </div>
  );
};

export default ContentBlock;
