import React from 'react';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="pt-32 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="home-text">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
              Enjoy Your <br /> Delicious Food
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Fast delivery at your doorstep
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Savor the taste of freshness delivered right to your door. Our passion is bringing you delicious meals with speed and care, making every bite a delight.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition-colors">
              Order Now
            </button>
          </div>
          <div className="home-img flex justify-center">
            <img 
              src="./delicious-food.png" 
              alt="Delicious Food" 
              className="max-w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About <span className="text-orange-500">Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are dedicated to providing the best food delivery experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="about-img">
            <img 
              src="./restaurant.png" 
              alt="Our Restaurant" 
              className="rounded-xl w-full"
            />
          </div>
          <div className="about-text">
            <h3 className="text-2xl font-semibold mb-4">We Make Quality Food</h3>
            <p className="text-gray-300 mb-6">
              We are dedicated to crafting quality food that delights your senses. Every dish is prepared with care, passion, and the freshest ingredients to ensure an unforgettable experience.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 md:px-16 lg:px-24 bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our <span className="text-orange-500">Menu</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of delicious meals
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            { title: "Chicken Burger", price: "240.00", desc: "Tender chicken with special spices and sauces", img: "./chicken-burger.jpg" },
            { title: "Special Pizza", price: "220.00", desc: "Fresh toppings with homemade sauce and cheese", img: "./special-pizza.jpg" },
            { title: "Cold Coffee", price: "190.00", desc: "Refreshing cold coffee with cream and ice", img: "./cold-coffee.jpg" },
            { title: "Chicken Fry", price: "200.00", desc: "Crispy fried chicken with our secret spice mix", img: "./chicken-fry.jpg" },
            { title: "Veg Pasta", price: "175.00", desc: "Fresh vegetables with creamy pasta sauce", img: "./veg-pasta.jpg" },
            { title: "Deluxe Salad", price: "190.00", desc: "Healthy mix of fresh vegetables and premium dressing", img: "./deluxe-salad.jpg" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
};

export default Home;
