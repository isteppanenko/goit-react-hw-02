import Descriptions from './description/Descriptions';
import FeedBack from './feedback/FeedBack';
import Options from './Options/Options';
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

  return (
    <>
      <Descriptions />
      <Options updateFeedback={updateFeedback} />
      <FeedBack good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </>
  );
}
export default App;
