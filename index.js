const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="comment-button" />
      <Button buttonText="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
