import React from "react";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-item">
            <h3>{restaurant.name}</h3>
            <p>Available Hours:</p>
            <ul>
              {restaurant.hours.map((hour, index) => (
                <li key={index}>
                  {hour.date} at {hour.time}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No restaurants match your criteria.</p>
      )}
    </div>
  );
};

export default RestaurantList;