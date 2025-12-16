// app/menu/page.js
import MenuHero from "@/components/menu/MenuHero";
import MenuCategory from "@/components/menu/MenuCategory";
import DietaryInfo from "@/components/menu/DietaryInfo";
import SeasonalSpecials from "@/components/menu/SeasonalSpecials";

// Import your menu data
import {
  coffeeItems,
  teaItems,
  pastryItems,
  foodItems,
} from "@/lib/data/menuItems";

export default function MenuPage() {
  // Define categories dynamically
  const categories = [
    {
      title: "Coffee & Espresso",
      items: coffeeItems,
      description: "Freshly brewed with our premium beans",
    },
    {
      title: "Tea & Specialty Drinks",
      items: teaItems,
      description: "Hot and cold beverages",
    },
    {
      title: "Pastries & Desserts",
      items: pastryItems,
      description: "Baked fresh daily",
    },
    {
      title: "Breakfast & Lunch",
      items: foodItems,
      description: "Light bites and meals",
    },
  ];

  return (
    <main className="bg-[#120805] text-amber-50">
      <MenuHero />

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Render all categories dynamically */}
        {categories.map((category) => (
          <MenuCategory
            key={category.title}
            title={category.title}
            items={category.items}
            description={category.description}
          />
        ))}

        {/* Dietary Info & Seasonal Specials */}
        <DietaryInfo />
        <SeasonalSpecials />
      </div>
    </main>
  );
}
