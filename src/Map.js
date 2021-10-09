import { useLocation } from "react-router-dom";
import "./Map.css";

export const Map = () => {
  const location = useLocation();
  const playerInfo = location.state.playerStats;

  console.log(playerInfo);
  return (
    <div id="map-container">
      <h1>Map</h1>
      <div id="map">
        <div id="start" className="location current">
          ◊
        </div>
        <div id="cave" className="location">
          ◻
        </div>
      </div>
    </div>
  );
};
