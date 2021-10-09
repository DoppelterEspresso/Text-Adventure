import { useLocation } from "react-router-dom";
import "./Map.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Map = () => {
  const location = useLocation();
  const playerInfo = location.state.playerInfo;
  const [row, setRow] = useState(4);
  const [column, setColumn] = useState(4);

  document.body.onkeydown = (e) => {
    if (e.key === "w" || e.key === "ArrowUp") {
      setRow(row + 1);
    } else if (e.key === "s" || e.key === "ArrowDown") {
      setRow(row - 1);
    }

    if (e.key === "a" || e.key === "ArrowLeft") {
      setColumn(column - 1);
    } else if (e.key === "d" || e.key === "ArrowRight") {
      setColumn(column + 1);
    }
  };

  useEffect(() => {
    let currentLocation = document.getElementsByClassName("current")[0];
    currentLocation.classList.remove("current");
    currentLocation = document.getElementsByClassName(`grid-${4}-${row}`)[0];
    currentLocation.classList.add("current");
  }, [row, column]);

  return (
    <div id="map-container">
      <h1>Map</h1>
      <div id="map">
        <div id="start" className="location current grid-4-4">
          ◊
        </div>
        <div id="cave" className="location grid-4-3">
          ◻
        </div>
        <div id="road-up-1" className="location grid-4-5"></div>
      </div>
      <div className="buttons-container">
        <Link to="/">
          <button>Terminal</button>
        </Link>
        <Link
          to={{
            pathname: "/inventory",
            state: { playerInfo },
          }}
        >
          <button>Inventory</button>
        </Link>
      </div>
    </div>
  );
};
