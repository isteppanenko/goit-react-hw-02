import css from '../Options/Options.module.css';
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
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
      {totalFeedback > 0 ? (
        <button className={css.buttonOptions} onClick={resetFeedback}>
          Reset
        </button>
      ) : null}
    </>
  );
};

export default Options;
