import React from 'react';

const ImagePage = () => {
  const travelCards = [
    { id: 1, img: "/images/CorporateTravel/1.jpg", title: "Group Memories" },
    { id: 2, img: "/images/CorporateTravel/2.jpg", title: "Group Memories" },
    { id: 3, img: "/images/CorporateTravel/3.jpg", title: "Group Memories" },
    { id: 4, img: "/images/CorporateTravel/4.jpg", title: "Group Memories" },
    { id: 5, img: "/images/CorporateTravel/5.jpg", title: "Group Memories" },
    { id: 6, img: "/images/CorporateTravel/6.jpg", title: "Group Memories" },
    { id: 7, img: "/images/CorporateTravel/7.jpg", title: "Group Memories" },
    { id: 8, img: "/images/CorporateTravel/8.jpg", title: "Group Memories" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className=" mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative aspect-square  overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* <div className="p-4 bg-white">
                <p className="text-sm font-semibold text-gray-800 text-center">{card.title}</p>
              </div> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ImagePage;