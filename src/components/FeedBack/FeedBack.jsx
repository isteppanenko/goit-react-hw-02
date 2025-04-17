const FeedBack = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <>
      {totalFeedback > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      ) : null}
    </>
  );
};
export default FeedBack;
