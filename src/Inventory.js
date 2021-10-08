import { Link } from "react-router-dom";
import "./Inventory.css";

export const Inventory = () => {
  return (
    <div className="inventory-container">
      <h1>Inventory</h1>
      <div id="inventory">
        <div id="left-container">
          <div id="stats">
            <ul>
              <li className="stat-item">Health: 50/50</li>
              <li className="stat-item">Defense: 10</li>
            </ul>
          </div>
          <div id="items">
            <ul id="item-list">
              <li>Key</li>
              <li>Note</li>
            </ul>
          </div>
        </div>
        <div id="right-container"></div>
      </div>
      <div className="buttons-container">
        <Link to="/">
          <button>Terminal</button>
        </Link>
        <button>Map</button>
      </div>
    </div>
  );
};
