import React from 'react';

const dishes = [
  {
    name: "Lumpia with Sauce",
    price: "$12",
    description: "Crispy vegetable spring rolls served with a tangy homemade dipping sauce for the perfect balance of flavors.",
    img: "./src/assets/Egg and Cucumber.jpg", 
  },
  {
    name: "Fish and Veggie",
    price: "$12",
    description: "Grilled fish fillet paired with seasonal vegetables, finished with a drizzle of extra virgin olive oil and fresh herbs.",
    img: "/src/assets/Fish and Veggie.jpg",
  },
  {
    name: "Tofu Chili",
    price: "$10",
    description: "Marinated tofu cubes tossed in a spicy chili sauce with garlic and ginger for an authentic Asian kick.",
    img: "/src/assets/Lumpia with Suace.jpg",
  },
  {
    name: "Egg and Cucumber",
    price: "$11",
    description: "Light and refreshing egg-and-cucumber salad, dressed in balsamic vinaigrette and garnished with fresh mint.",
    img: "/src/assets/Tofu Chili.jpg",
  }
];

export default function SpecialDishes() {
  return (
    <section className="text-center my-2">
      <h2 className="text-3xl font-bold mb-4 mt-0">Our Special Dishes</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Discover our chef’s curated selection of dishes, blending fresh ingredients with bold flavors.
      </p>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-4 w-60 relative overflow-hidden"
            >
              <div className="relative">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="
                    w-full h-48 object-cover rounded-xl
                    transition duration-300 ease-in-out transform
                    hover:filter hover:grayscale hover:brightness-75
                    hover:scale-95 hover:rotate-6
                  "
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold rounded-full px-3 py-1">
                  {dish.price}
                </div>
              </div>
              <h3 className="text-lg font-bold mt-4">{dish.name}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {dish.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}












