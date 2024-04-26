const Message = ({ text, sender }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <strong>{sender}:</strong> {text}
      </div>
    </div>
  );
};

export default Message;
