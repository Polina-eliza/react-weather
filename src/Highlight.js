import React from 'react';

const Highlight = ({ label, value }) => {
  return (
    <div className="highlight__wrapper">
      <div className="highlight__subheading">{label}</div>
      <div className="highlight__body">{value}</div>
    </div>
  );
};

const HighlightList = ({ highlightData }) => {
  return (
    <div className="highlight__container">
      {highlightData.map((highlight, index) => (
        <Highlight key={index} label={highlight.label} value={highlight.value} />
      ))}
    </div>
  );
};

export default HighlightList;