import { useState } from 'react';
import css from '../Options/Options.module.css';
const Options = ({ good, neutral, bad }) => {
  // const onActions = () => alert('Hello world');
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };
  return (
    <>
      <button className={css.buttonOptions} onClick={good}>
        Good
      </button>
      <button className={css.buttonOptions} onClick={neutral}>
        Neutral
      </button>
      <button className={css.buttonOptions} onClick={bad}>
        Bad
      </button>
    </>
  );
};

export default Options;
