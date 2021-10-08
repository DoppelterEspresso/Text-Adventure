import { useLocation } from "react-router-dom";
import "./Fight.css";

export const Fight = () => {
  let location = useLocation();
  let enemyInfo = location.state.enemyInfo;
  let playerInfo = location.state.playerInfo;

  console.log(playerInfo);
  return (
    <div className="fight-container">
      <h1 id="fight-headline">Fight</h1>
      <div className="combatants-container">
        <div id="player-display" className="combatant-display">
          <h1 className="combatant-name">Player</h1>
          <div className="combatant-stats">
            <span className="combatant-hp">
              HP: {playerInfo.hp}/{playerInfo.maxHp}
            </span>
            <span className="combatant-defense">
              Defense: {playerInfo.defense}
            </span>
          </div>
          <div id="player-actions">
            <button className="player-action-button">Attack</button>
            <button className="player-action-button">Defend</button>
          </div>
        </div>
        <div id="enemy-display" className="combatant-display">
          <h1 className="combatant-name">{enemyInfo.enemy}</h1>
          <div className="combatant-stats">
            <span className="combatant-hp">
              HP: {enemyInfo.hp}/{enemyInfo.maxHp}
            </span>
            <span className="combatant-defense">
              Defense: {enemyInfo.defense}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
