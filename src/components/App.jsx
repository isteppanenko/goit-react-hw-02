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

  return (
    <>
      <Descriptions />
      <Options
        good={() => {
          setClicks({
            ...clicks,
            good: clicks.good + 1,
          });
        }}
        neutral={() => {
          setClicks({
            ...clicks,
            neutral: clicks.neutral + 1,
          });
        }}
        bad={() => {
          setClicks({
            ...clicks,
            bad: clicks.bad + 1,
          });
        }}
      />
      <FeedBack good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </>
  );
}

export default App;
