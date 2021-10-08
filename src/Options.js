export const Options = (props) => {
  let currentOptions = [];
  if (props.show) {
    for (
      let option = 1;
      option <= Object.keys(props.options).length;
      option++
    ) {
      currentOptions.push(
        <li key={option}>
          <span className="option">{props.options[option]}</span>
        </li>
      );
    }
  }
  return (
    <div className="options-container">
      <ul id="options-list">{currentOptions}</ul>
    </div>
  );
};
