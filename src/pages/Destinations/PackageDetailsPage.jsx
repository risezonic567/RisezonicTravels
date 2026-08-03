import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { packagePosts } from "../../data/packageData";
import {
  Star,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function PackageDetails() {
  const { slug } = useParams();


  const packageItem = packagePosts.find(
    (item) => item.slug === slug
  );

  const latestPackage = packagePosts.filter((item) => item.id !== packageItem.id).slice(0, 3)


  if (!packageItem) {
    return <div className="text-center mt-20">Package Not Found</div>;
  }

  const {
    hero,
    price,
    overview,
    gallery,
    included,
    itinerary,
    reviews,
    pdf,
  } = packageItem;

  const [openDay, setOpenDay] = useState(1);
  const [guests, setGuests] = useState(1);

  const pricePerPerson = price;

  return (
    <div className="min-h-screen mt-20 bg-[#f9fbff] text-slate-800">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-md mb-8">
          <img
            src={hero.coverImage}
            alt={hero.title}
            className="w-[1250px] h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                {hero.rating}
              </span>
              <span className="text-xs text-gray-500">
                ({hero.reviews} Reviews)
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-black">
              {hero.title}
            </h1>

            <p className="text-sm text-gray-600 mt-1">
              {hero.subtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-10">

            {/* OVERVIEW */}
            <section>
              <h2 className="text-xl font-bold mb-3">Overview</h2>
              <div
                dangerouslySetInnerHTML={{ __html: overview }}
              />
            </section>

            {/* GALLERY */}
            <section>
              <h2 className="text-xl font-bold mb-3">Gallery</h2>
              <div className="grid grid-cols-3 gap-3">
                {gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="h-[200px] w-full bject-cover rounded-xl"
                  />
                ))}
              </div>
            </section>

            {/* INCLUDED */}
            {/* <section>
              <h2 className="text-xl font-bold mb-3">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {included.map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="text-green-500 w-4 h-4 mt-1" />
                    {item}
                  </div>
                ))}
              </div>
            </section> */}

            {/* ITINERARY */}
            {/* <section>
              <h2 className="text-xl font-bold mb-3">
                Itinerary
              </h2>

              {itinerary.map((day) => {
                const isOpen = openDay === day.day;

                return (
                  <div
                    key={day.day}
                    className="border rounded-xl mb-2 bg-white"
                  >
                    <button
                      onClick={() =>
                        setOpenDay(isOpen ? null : day.day)
                      }
                      className="w-full flex justify-between p-4"
                    >
                      <span>
                        Day {day.day} - {day.title}
                      </span>

                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {isOpen && (
                      <div className="p-4 text-sm text-gray-600 border-t">
                        {day.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </section> */}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="sticky top-24">
            <div className="bg-white p-6 rounded-2xl shadow">

              <h3 className="text-2xl font-bold">
                ₹{pricePerPerson}
              </h3>
              <p className="text-sm text-gray-400">
                per person
              </p>

              {/* Guests */}
              <div className="mt-4">
                <label>Guests</label>
                <input
                  type="number"
                  value={guests}
                  onChange={(e) =>
                    setGuests(Number(e.target.value))
                  }
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              {/* Total */}
              <div className="mt-4 flex justify-between">
                <span>Total</span>
                <span className="font-bold">
                  ₹{pricePerPerson * guests}
                </span>
              </div>

              <Link to="tel:+919711110975">
                <button className="w-full mt-4 bg-black text-white py-3 rounded-xl">
                  Book Now
                </button>
              </Link>

              {pdf && (
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-3"
                >
                  <button className="w-full border border-black text-black py-3 rounded-xl hover:bg-black hover:text-white transition">
                    Download PDF
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow">
                <div className="flex justify-between">
                  <span className="font-bold">
                    ⭐ {rev.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    {rev.date}
                  </span>
                </div>

                <h4 className="font-semibold mt-2">
                  {rev.tag}
                </h4>

                <p className="text-sm text-gray-600 mt-1">
                  {rev.text}
                </p>

                <p className="text-xs mt-3 text-gray-500">
                  - {rev.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Latest Tour Packages
            </h2>

            <Link
              to="/package"
              className="text-blue-600 hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPackage.map((item) => (
              <Link
                key={item.id}
                to={`/package/${item.slug}`}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {item.categories}
                  </span>

                  <h3 className="text-lg font-bold mt-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">
                      ₹{item.price}
                    </span>

                    <span className="text-blue-600 font-medium">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}