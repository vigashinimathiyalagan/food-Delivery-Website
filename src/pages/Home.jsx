import { UseState } from 'react';

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
              src="/delicious food.png" 
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
              src="/restautrant.png" 
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Item 1 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition">
            <img 
              src="/Chicken Burger.jpg" 
              alt="Chicken Burger" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Chicken Burger</h3>
                <span className="text-orange-500 font-bold">240.00</span>
              </div>
              <p className="text-gray-400 mb-4">
                Tender chicken with special spices and sauces
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
          </div>

          {/* Menu Item 2 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition">
            <img 
              src="/special pizza.jpg" 
              alt="Special Pizza" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Special Pizza</h3>
                <span className="text-orange-500 font-bold">220.00</span>
              </div>
              <p className="text-gray-400 mb-4">
                Fresh toppings with homemade sauce and cheese
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
          </div>

          {/* Menu Item 3 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition">
            <img 
              src="/cold coffee.jpg" 
              alt="Cold Coffee" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Cold Coffee</h3>
                <span className="text-orange-500 font-bold">190.00</span>
              </div>
              <p className="text-gray-400 mb-4">
                Refreshing cold coffee with cream and ice
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
          </div>

          {/* Menu Item 4 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition">
            <img 
              src="/chicken fry.jpg" 
              alt="Chicken Fry" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Chicken Fry</h3>
                <span className="text-orange-500 font-bold">200.00</span>
              </div>
              <p className="text-gray-400 mb-4">
                Crispy fried chicken with our secret spice mix
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
          </div>

          {/* Menu Item 5 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition">
            <img 
              src="/veg pasta.jpg" 
              alt="Veg Pasta" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Veg Pasta</h3>
                <span className="text-orange-500 font-bold">175.00</span>
              </div>
              <p className="text-gray-400 mb-4">
                Fresh vegetables with creamy pasta sauce
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
          </div>

          {/* Menu Item 6 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition">
            <img 
              src="/deluxe salad.jpg" 
              alt="Deluxe Salad" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Deluxe Salad</h3>
                <span className="text-orange-500 font-bold">190.00</span>
              </div>
              <p className="text-gray-400 mb-4">
                Healthy mix of fresh vegetables and premium dressing
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our <span className="text-orange-500">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer the best food delivery services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition">
            <div className="text-orange-500 text-4xl mb-4 flex justify-center">
              <i className="fas fa-truck"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p className="text-gray-400">
              We deliver your order promptly to your door
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition">
            <div className="text-orange-500 text-4xl mb-4 flex justify-center">
              <i className="fas fa-utensils"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Fresh Food</h3>
            <p className="text-gray-400">
              We use quality ingredients for great taste
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition">
            <div className="text-orange-500 text-4xl mb-4 flex justify-center">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-400">
              Our customer service is always available
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-orange-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Hungry? Order Food Now
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Enjoy delicious food in the comfort of your home. Fast delivery with premium quality meals made just for you.
        </p>
        <button className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
          Order Now
        </button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact <span className="text-orange-500">Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for the best food delivery service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-info">
            <div className="flex items-start mb-8">
              <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-gray-400">42 M.G. Road, Pudukkottai, Tamil Nadu 622001, India</p>
              </div>
            </div>
            
            <div className="flex items-start mb-8">
              <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start mb-8">
              <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">info@foodbites.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-400">
                  Monday - Friday: 9am - 10pm <br />
                  Saturday - Sunday: 10am - 11pm
                </p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="5" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-orange-500 transition"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Food<span className="text-white">Bites</span></h2>
            <p className="text-gray-400 mb-4">
              Delivering the best food experience right to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">About</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-orange-500 transition">Menu</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Delivery Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Payment Methods</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 bg-gray-700 border border-gray-600 rounded-l focus:outline-none focus:border-orange-500 transition flex-grow"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-r transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400">© 2025 FoodBites. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;