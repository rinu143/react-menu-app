export const mainCourseItems = [
  {
    id: "mc1",
    name: "Grilled Salmon with Asparagus",
    category: "Main Course",
    price: 24.99,
    description:
      "Freshly grilled salmon fillet served with steamed asparagus and lemon-dill sauce.",
    isVegetarian: false,
  },
  {
    id: "mc2",
    name: "Vegetable Lasagna",
    category: "Main Course",
    price: 18.5,
    description:
      "Layers of pasta, rich marinara sauce, ricotta, mozzarella, and seasonal vegetables.",
    isVegetarian: true,
  },
  {
    id: "mc3",
    name: "Chicken Alfredo Pasta",
    category: "Main Course",
    price: 20.75,
    description:
      "Fettuccine pasta tossed in creamy Alfredo sauce with tender grilled chicken.",
    isVegetarian: false,
  },
  {
    id: "mc4",
    name: "Mushroom Risotto",
    category: "Main Course",
    price: 19.25,
    description:
      "Creamy Arborio rice cooked with assorted wild mushrooms and Parmesan cheese.",
    isVegetarian: true,
  },
];

export const dessertItems = [
  {
    id: "d1",
    name: "Chocolate Lava Cake",
    category: "Dessert",
    price: 9.5,
    description:
      "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
    isVegetarian: true,
  },
  {
    id: "d2",
    name: "New York Cheesecake",
    category: "Dessert",
    price: 8.75,
    description:
      "Classic creamy cheesecake on a graham cracker crust, topped with berry compote.",
    isVegetarian: true,
  },
  {
    id: "d3",
    name: "Apple Crumble",
    category: "Dessert",
    price: 7.99,
    description:
      "Warm baked apples with a buttery oat crumble topping, served with custard.",
    isVegetarian: true,
  },
];

export const allMenuItems = [...mainCourseItems, ...dessertItems];