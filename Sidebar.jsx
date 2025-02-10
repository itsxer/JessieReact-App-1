import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems = [] }) {
  // TODO 2: Maintain menu items state
  let [menuItems, setMenuItems] = useState(initialMenuItems);
  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");

  // TODO 3: Implement addMenuItem function
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim()) {
      setMenuItems([...menuItems, newMenuItem]); // Add new item to the list
      setNewMenuItem(""); // Clear input
    }
  }, [menuItems, newMenuItem]);

  // TODO 4: Filter menu items based on input
  const filteredItems = menuItems.filter((item) =>
    new RegExp(filter, "i").test(item) // Case-insensitive filtering
  );

  return (
    <div>
      {/* TODO 1: Render menu items as a list */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Enter menu item..."
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  );
}
