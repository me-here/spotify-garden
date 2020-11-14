function Message() {
  return (
      <div>
        Hello
        2+2 <br/>
        {2+2}
        <InnerMessage />
        <h1>hello world</h1>
      </div>
  );
}

function InnerMessage() {
  return <div>hey there!</div>
}

export default Message;
