// e:\Documents\restaurantmenu_rinu\src\App.jsx
import React from "react";
import MenuItem from "./components/MenuItem";
import { mainCourseItems, dessertItems, allMenuItems } from "./data/menuData";
import "./App.css"; // General app styling

function App() {
  const currentYear = new Date().getFullYear();
  const totalMenuItems = allMenuItems.length;

  return (
    <div className="restaurant-menu-app">
      {/* Header Section */}
      <header className="app-header">
        <h1>The Flavorful Spoon</h1>
        <p className="tagline">Delicious Food, Made Fresh Daily</p>
      </header>

      <main className="menu-content">
        {/* Main Course Items */}
        <section className="menu-category-section">
          <h2 className="category-heading">Main Courses</h2>
          <div className="menu-items-grid">
            {mainCourseItems.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                description={item.description}
                isVegetarian={item.isVegetarian}
              />
            ))}
          </div>
        </section>

        {/* Desserts */}
        <section className="menu-category-section">
          <h2 className="category-heading">Desserts</h2>
          <div className="menu-items-grid">
            {dessertItems.map((item) => (
              <MenuItem
                key={item.id} // Use unique ID for key
                name={item.name}
                category={item.category}
                price={item.price}
                description={item.description}
                isVegetarian={item.isVegetarian}
              />
            ))}
          </div>
        </section>

        {/* Restaurant Info Section */}
        <section className="restaurant-info-section">
          <h2 className="info-heading">Our Restaurant</h2>
          <p>
            Total items on menu: <strong>{totalMenuItems}</strong>
          </p>
          <p>Open Daily: 11 AM - 10 PM</p>
          <p>Contact: (123) 456-7890 | 123 Main St, Anytown, USA</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>&copy; {currentYear} The Flavorful Spoon</p>
        <p>Email: info@flavorfulspoon.com | Website: www.flavorfulspoon.com</p>
      </footer>
    </div>
  );
}

export default App;
