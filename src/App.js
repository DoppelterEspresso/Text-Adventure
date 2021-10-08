import { useEffect, useState } from "react";
import "./App.css";
import { Text } from "./Text";
import { PlayerInput } from "./PlayerInput";
import { GameText } from "./GameText";
import { Options } from "./Options";

const App = () => {
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [showOptions, setShowOptions] = useState(false);

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
      Object.keys(GameText[page].text).length > count
    ) {
      setCount(count + 1);
      console.log(count);
    } else if (
      e.key === " " &&
      document.querySelector("input") !== document.activeElement
    ) {
      setShowOptions(true);
    } else if (e.key === "Enter") {
      console.log(Object.values(GameText[page].options));
      let inputField = document.getElementById("player-input");
      console.log(inputField.value);
      if (
        Object.values(GameText[page].options).includes(
          inputField.value.toLowerCase()
        )
      ) {
        setPage(GameText[page].nextPage[inputField.value.toLowerCase()]);
        setCount(1);
        setShowOptions(false);
        inputField.value = "";
      }
    }
  };

  return (
    <div className="flex-container">
      <div className="game-container">
        <div id="game-content">
          <Text currentCount={count} currentPage={page} />
          <Options options={GameText[page].options} show={showOptions} />
        </div>
        <PlayerInput />
      </div>
      <div className="buttons-container">
        <button>Inventory</button>
        <button>Map</button>
      </div>
    </div>
  );
};

export default App;
