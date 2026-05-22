  import React from 'react';

  const HotelDestinationPage = () => {
    const hotels = [
      {
        id: 1,
        name: "The Azure Horizon Resort",
        location: "Maldives, Central Province",
        price: 340,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
        tags: ["Luxury", "Spa", "All-Inclusive"]
      },
      {
        id: 2,
        name: "The Urban Meridian",
        location: "New York, USA",
        price: 215,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        tags: ["City Center", "Business", "Gym"]
      },
      {
        id: 2,
        name: "The Urban Meridian",
        location: "New York, USA",
        price: 215,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        tags: ["City Center", "Business", "Gym"]
      },
      {
        id: 2,
        name: "The Urban Meridian",
        location: "New York, USA",
        price: 215,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        tags: ["City Center", "Business", "Gym"]
      },
      {
        id: 2,
        name: "The Urban Meridian",
        location: "New York, USA",
        price: 215,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        tags: ["City Center", "Business", "Gym"]
      }
    ];

    return (
      <div className="min-h-screen py-2 bg-gray-50 font-sans">
        <header className="bg-blue-900 text-white py-12 px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Explore Your Next Stay</h1>
          <p className="text-blue-200">Exclusive deals on premium hotels worldwide.</p>
        </header>

        <main className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
          
          <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Filter By</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$100</span>
                <span>$1000+</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-gray-700 text-sm">Star Rating</p>
              {[5, 4, 3].map(star => (
                <label key={star} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600 text-sm">{star} Stars</span>
                </label>
              ))}
            </div>
          </aside>

          <section className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Available Hotels</h2>
              <select className="bg-white border border-gray-300 text-gray-700 py-1 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {hotels.map(hotel => (
                <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <img src={hotel.image} alt={hotel.name} className="w-full md:w-72 h-48 object-cover" />
                  
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                        <p className="text-gray-500 text-sm flex items-center mt-1">
                          📍 {hotel.location}
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">⭐ {hotel.rating}</span>
                    </div>

                    <div className="flex mt-4 gap-2">
                      {hotel.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider bg-gray-100 px-2 py-1 rounded text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">${hotel.price}</span>
                        <span className="text-gray-400 text-sm">/night</span>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  };

  export default HotelDestinationPage;