function FirstComponent(props) {
  return (
    <div className="modal">
      <h1>{props.owner} Application</h1>

      <p>Its Application - {props.reason}</p>
      <button onClick={props.closemodal}>Close</button>
    </div>
  );
}
export default FirstComponent;
