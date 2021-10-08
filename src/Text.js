import { GameText } from "./GameText";

export const Text = (props) => {
  let textList = [];

  for (let i = 1; i <= props.currentCount; i++) {
    if (Object.keys(GameText[props.currentPage]).length >= i) {
      textList.push(
        <li key={i}>
          <span className={`game-text current-text`}>
            {GameText[props.currentPage][i]}
          </span>
        </li>
      );
    }
  }

  console.log(textList);
  return <ul>{textList}</ul>;
};
