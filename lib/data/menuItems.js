export const coffeeItems = [
  {
    id: 1,
    name: "Signature Latte",
    description:
      "Our signature espresso with creamy steamed milk and house-made vanilla syrup",
    price: 4.95,
    category: "Coffee",
    bestseller: true,
    image: "/menu/latte.jpg",
    options: ["Hot", "Iced", "Oat Milk", "Almond Milk"],
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    description:
      "Espresso with vanilla-flavored syrup, milk and caramel drizzle",
    price: 5.25,
    category: "Coffee",
    bestseller: true,
    image: "/menu/caramel-macchiato.jpg",
  },
  {
    id: 3,
    name: "Cold Brew Deluxe",
    description:
      "18-hour steeped cold brew with notes of chocolate and caramel",
    price: 5.5,
    category: "Coffee",
    seasonal: true,
    image: "/menu/cold-brew.jpg",
  },
  {
    id: 4,
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk and milk foam",
    price: 4.25,
    category: "Coffee",
    image: "/menu/caramel-latte.jpg",
  },
  {
    id: 5,
    name: "Mocha",
    description: "Espresso with chocolate syrup and steamed milk",
    price: 5.0,
    category: "Coffee",
    image: "/menu/mocha.jpg",
  },
  {
    id: 6,
    name: "Americano",
    description: "Espresso shots topped with hot water",
    price: 3.75,
    category: "Coffee",
    image: "/menu/americano.jpg",
  },
];

export const teaItems = [
  {
    id: 7,
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked with creamy oat milk",
    price: 5.5,
    category: "Tea",
    vegan: true,
    image: "/menu/matcha-latte.jpg",
  },
  {
    id: 8,
    name: "Chai Latte",
    description: "Spiced black tea with steamed milk and honey",
    price: 4.95,
    category: "Tea",
    bestseller: true,
    image: "/menu/chai-latte.jpg",
  },
  {
    id: 9,
    name: "Earl Grey",
    description: "Classic black tea with bergamot orange",
    price: 3.5,
    category: "Tea",
    image: "/menu/earl-grey.jpg",
  },
];

export const pastryItems = [
  {
    id: 10,
    name: "Chocolate Croissant",
    description: "Flaky, buttery pastry filled with premium Belgian chocolate",
    price: 3.75,
    category: "Pastry",
    bestseller: true,
    image: "/menu/chocolate-croissant.jpg",
  },
  {
    id: 11,
    name: "Cinnamon Roll",
    description: "Freshly baked cinnamon roll with cream cheese frosting",
    price: 4.25,
    category: "Pastry",
    bestseller: true,
    image: "/menu/cinnamon-roll.jpg",
  },
  {
    id: 12,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: 3.5,
    category: "Pastry",
    image: "/menu/blueberry-muffin.jpg",
  },
];

export const foodItems = [
  {
    id: 13,
    name: "Avocado Toast",
    description:
      "Sourdough toast with smashed avocado, cherry tomatoes, and microgreens",
    price: 8.95,
    category: "Food",
    vegan: true,
    image: "/menu/avocado-toast.jpg",
  },
  {
    id: 14,
    name: "Breakfast Sandwich",
    description: "Egg, cheese, and bacon on a toasted croissant",
    price: 7.5,
    category: "Food",
    image: "/menu/breakfast-sandwich.jpg",
  },
  {
    id: 15,
    name: "Greek Yogurt Bowl",
    description: "Greek yogurt with granola, honey, and seasonal berries",
    price: 6.95,
    category: "Food",
    image: "/menu/yoghurt-bowl.jpg",
  },
];

// For homepage preview
export const featuredItems = [coffeeItems[0], pastryItems[0], teaItems[0]];

// All items for menu page
export const allMenuItems = [
  ...coffeeItems,
  ...teaItems,
  ...pastryItems,
  ...foodItems,
];
