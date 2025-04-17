const Notification = ({ totalFeedback }) => {
  return (
    <>
      <p>{totalFeedback > 0 ? null : 'No feedback yet'}</p>
    </>
  );
};

export default Notification;
