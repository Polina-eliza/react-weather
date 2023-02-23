import React from 'react';

const Author = ({ name, link }) => {
  return (
    <div className="author">
      <a className="author__link" href={link}>
        Open Source Code
      </a>
      {' by '}
      {name}
      {' '}
      <span role="img" aria-label="wave">👋</span>
    </div>
  );
};

export default Author;