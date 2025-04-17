import { useState } from 'react';
import css from '../Options/Options.module.css';
const Options = ({ updateFeedback }) => {
  return (
    <>
      <button
        className={css.buttonOptions}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.buttonOptions}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.buttonOptions}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
    </>
  );
};

export default Options;
