import { useEffect, useState } from "react";
import "./App.css";
import { Text } from "./Text";
import { PlayerInput } from "./PlayerInput";
import { GameText } from "./GameText";

const App = () => {
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let newText = document.querySelector("ul").lastChild.lastChild;
    let newTextContent = newText.textContent;
    newText.textContent = "";
    let textCount = 0;
    let newTextLength = newTextContent.length;
    async function setText() {
      setTimeout(() => {
        newText.textContent += newTextContent.charAt(textCount);
        textCount++;
        if (textCount <= newTextLength) {
          setText();
        } else {
          newText.className = "game-text";
        }
      }, 50);
    }
    setText();
  }, [count]);

  document.body.onkeyup = (e) => {
    if (
      e.key === " " &&
      document.querySelector("input") !== document.activeElement &&
      Object.keys(GameText[page]).length > count
    ) {
      setCount(count + 1);
      console.log(count);
    }
  };

  return (
    <div className="flex-container">
      <div className="game-container">
        <div id="game-content">
          <Text currentCount={count} currentPage={page} />
        </div>
        <PlayerInput />
      </div>
    </div>
  );
};

export default App;
