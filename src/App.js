import { useEffect, useState } from "react";
import "./App.css";
import { Text } from "./Text";
import { PlayerInput } from "./PlayerInput";
import { GameText } from "./GameText";
import { Options } from "./Options";
import { Link, Redirect } from "react-router-dom";

const App = () => {
  const [redirect, setRedirect] = useState(null);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    hp: 50,
    maxHp: 50,
    defense: 12,
    weapon: "sword",
    armor: "leather",
    attackPower: 5,
    items: {
      1: "key",
      2: "lighter",
    },
  });

  useEffect(() => {
    setPage(JSON.parse(window.localStorage.getItem("page")));
    setPlayerStats(JSON.parse(window.localStorage.getItem("playerStats")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("page", page);
    window.localStorage.setItem("playerStats", JSON.stringify(playerStats));
  }, [page, playerStats]);

  useEffect(() => {
    if (page !== 0) {
      let newText = document.querySelector("ul").lastChild.lastChild;
      let newTextContent = GameText[page].text[count];
      console.log(newTextContent);
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
            console.log(GameText[page].text[count]);
          }
        }, 50);
      }
      setText();
    }
  }, [count]);

  document.body.onkeyup = (e) => {
    if (
      e.key === " " &&
      document.querySelector("input") !== document.activeElement &&
      Object.keys(GameText[page].text).length > count
    ) {
      setCount(count + 1);
    } else if (
      e.key === " " &&
      document.querySelector("input") !== document.activeElement
    ) {
      setShowOptions(true);
    } else if (e.key === "Enter") {
      //console.log(Object.values(GameText[page].options));
      let inputField = document.getElementById("player-input");
      //console.log(inputField.value);
      if (
        Object.values(GameText[page].options).includes(
          inputField.value.toLowerCase()
        ) &&
        inputField.value === "fight"
      ) {
        setRedirect("/fight");
      } else if (
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

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: redirect,
          state: {
            enemyInfo: GameText[page].fightInfo,
            playerInfo: playerStats,
          },
        }}
      />
    );
  }

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
        <Link
          to={{
            pathname: "/inventory",
            state: { playerStats },
          }}
        >
          <button>Inventory</button>
        </Link>
        <button>Map</button>
      </div>
    </div>
  );
};

export default App;
