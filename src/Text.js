import { GameText } from "./GameText";

export const Text = (props) => {
  let textList = [];

  for (let i = 1; i <= props.currentCount; i++) {
    console.log(props.currentPage);
    if (Object.keys(GameText[props.currentPage].text).length >= i) {
      textList.push(
        <li key={i}>
          <span className={`game-text current-text`}>
            {GameText[props.currentPage].text[i]}
          </span>
        </li>
      );
    }
  }

  return <ul>{textList}</ul>;
};
