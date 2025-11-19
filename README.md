# The Flavorful Spoon - Restaurant Menu Display

(Github link:)[https://github.com/rinu143/react-menu-app.git]
(Deployment link:)[https://regal-longma-898a18.netlify.app/]

This project is a simple, responsive restaurant menu website built with React and Vite. It showcases various menu items, categorized for easy browsing, and highlights vegetarian options.

## Table of Contents

*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Project Structure](#project-structure)
*   [Deployment](#deployment)
*   [Links](#links)

## Features

*   **Header Section**: Displays the restaurant name and a catchy tagline.
*   **Reusable `MenuItem` Component**: Each dish is rendered using a `MenuItem` component, displaying its name, category, price, description, and a conditional "Vegetarian" badge.
*   **Categorized Menu Lists**: Menu items are organized into distinct categories (e.g., "Main Courses", "Desserts") using the `map()` method for efficient rendering.
*   **Restaurant Information**: Includes total menu items, operating hours, and contact details.
*   **Footer Section**: Contains restaurant name, contact email/website, and current year.
*   **Responsive Design**: Basic styling to ensure readability across different devices.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool that provides a lightning-fast development experience for modern web projects.
*   **CSS**: For styling and layout.

## Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rinu143/react-menu-app.git
    cd restaurantmenu_rinu
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

To start the development server:

```bash
npm run dev
# or
yarn dev
