import { Link, useLocation } from "react-router-dom";
import "./Inventory.css";

export const Inventory = () => {
  const location = useLocation();
  const playerInfo = location.state.playerInfo;

  let itemsInInventory = [];

  for (let item = 1; item <= Object.entries(playerInfo.items).length; item++) {
    itemsInInventory.push(<li key={item}>{playerInfo.items[item]}</li>);
  }

  return (
    <div className="inventory-container">
      <h1>Inventory</h1>
      <div id="inventory">
        <div id="left-container">
          <div id="stats">
            <h1 className="inventory-headline">Stats</h1>
            <ul>
              <li className="stat-item">
                Health: {playerInfo.hp}/{playerInfo.maxHp}
              </li>
              <li className="stat-item">Defense: {playerInfo.defense}</li>
              <li className="stat-item">Attack: {playerInfo.attackPower}</li>
            </ul>
          </div>
          <div id="items">
            <h1 className="inventory-headline">Items</h1>
            <ul id="item-list">{itemsInInventory}</ul>
          </div>
        </div>
        <div id="right-container">
          <h1 className="inventory-headline">Equipped</h1>
          <div id="equip-container">
            <div id="current-weapon">Weapon: {playerInfo.weapon}</div>
            <div id="current-armor">Armor: {playerInfo.armor}</div>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <Link to="/">
          <button>Terminal</button>
        </Link>
        <Link
          to={{
            pathname: "/map",
            state: { playerInfo },
          }}
        >
          <button>Map</button>
        </Link>
      </div>
    </div>
  );
};
