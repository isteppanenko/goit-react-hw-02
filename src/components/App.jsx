import Descriptions from './description/Descriptions';
import FeedBack from './feedback/FeedBack';
import Options from './Options/Options';
import Notification from './Notification/Notification';
import { useState } from 'react';

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const resetFeedback = () =>
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  return (
    <>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
      <FeedBack
        good={clicks.good}
        neutral={clicks.neutral}
        bad={clicks.bad}
        totalFeedback={totalFeedback}
      />
    </>
  );
}
export default App;
