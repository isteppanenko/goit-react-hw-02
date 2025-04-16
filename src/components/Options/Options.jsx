import { useState } from 'react';
import css from '../Options/Options.module.css';
const Options = () => {
  // const onActions = () => alert('Hello world');
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <button className={css.buttonOptions} onClick={handleClick}>
        Good
      </button>
      <button className={css.buttonOptions} onClick={handleClick}>
        Neutral
      </button>
      <button className={css.buttonOptions} onClick={handleClick}>
        Bad
      </button>
      <button className={css.buttonOptions} onClick={handleClick}>
        Reset
      </button>
    </>
  );
};

export default Options;
