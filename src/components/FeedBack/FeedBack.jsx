import { useState } from 'react';

const FeedBack = ({ good, neutral, bad }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  );
};
export default FeedBack;
