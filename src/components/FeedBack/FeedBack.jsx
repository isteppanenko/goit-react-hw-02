const FeedBack = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <>
      {totalFeedback > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
        </div>
      ) : null}
    </>
  );
};
export default FeedBack;
