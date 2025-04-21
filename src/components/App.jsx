import Description from './Description/Description.jsx';
import FeedBack from './Feedback/FeedBack.jsx';
import Options from './Options/Options.jsx';
import Notification from './Notification/Notification.jsx';
import { useEffect, useState } from 'react';

function App() {
  // const [clicks, setClicks] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  const [clicks, setClicks] = useState(() => {
    const saveClicks = window.localStorage.getItem('save-clicks');
    if (saveClicks !== null) {
      return JSON.parse(saveClicks);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    window.localStorage.setItem('save-clicks', JSON.stringify(clicks));
  }, [clicks]);

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
      <Description />
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
