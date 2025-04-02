import React, { useState } from "react";

const Collection = ({ restaurants, onSaveToCollection }) => {
  const [collectionName, setCollectionName] = useState("");
  const [collections, setCollections] = useState({});

  // Handle saving a restaurant to a collection
  const handleSave = (restaurant) => {
    if (!collectionName) {
      alert("Please enter a collection name.");
      return;
    }

    setCollections((prevCollections) => {
      const updatedCollections = { ...prevCollections };
      if (!updatedCollections[collectionName]) {
        updatedCollections[collectionName] = [];
      }
      updatedCollections[collectionName].push(restaurant);
      return updatedCollections;
    });

    alert(`${restaurant.name} has been added to the "${collectionName}" collection.`);
  };

  return (
    <div className="collection-container">
      <h2>Manage Collections</h2>
      <div>
        <label htmlFor="collectionName">Collection Name:</label>
        <input
          type="text"
          id="collectionName"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </div>
      <div>
        <h3>Restaurants:</h3>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-item">
            <span>{restaurant.name}</span>
            <button onClick={() => handleSave(restaurant)}>Save to Collection</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Saved Collections:</h3>
        {Object.keys(collections).length > 0 ? (
          Object.entries(collections).map(([name, items]) => (
            <div key={name} className="collection">
              <h4>{name}</h4>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No collections created yet.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;