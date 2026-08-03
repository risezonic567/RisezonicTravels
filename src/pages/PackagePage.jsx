import React, { useState, useEffect } from "react";
import { packagePosts } from "../data/packageData";
import { Helmet } from "react-helmet";
import HomeNav from "../components/Navbar"
import { FiSearch, FiFilter } from "react-icons/fi"
import PackageCard from "../components/Package/PackageCard";

export default function PackagePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const categories = [
    "All",
    ...new Set(packagePosts.flatMap((p) => p.categories))
  ];

  let filtered = packagePosts.filter(
    (post) =>
      (category === "All" ||
        post.categories.includes(category)) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filtered = filtered.sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.date) - new Date(a.date);
    if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortOrder === "views") return b.views - a.views;
    if (sortOrder === "popular") return b.likes - a.likes;
    return 0;
  });

  return (
    <>
      <HomeNav />
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="destination guides," />
        <link rel="canonical" href="https://www.risezonictravel.com/package" />
      </Helmet>

      <div className="bg-blue-950 pt-40 px-4 text-center">

      </div>

      <div className="max-w-7xl mt-16 mx-auto px-4 py-12">

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 -mt-24 relative z-20 mb-12">

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all
        ${category === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* <div className="w-full lg:w-48">
            <select
              className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="views">Most Viewed</option>
              <option value="popular">Most Liked</option>
            </select>
          </div> */}
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-extrabold text-blue-700">
            {category === "All" ? "All Packages" : `${category} Packages`}
            <span className="text-gray-400 font-normal ml-3 text-lg">
              ({filtered.length})
            </span>
          </h2>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length ? (
            filtered.map(post => <PackageCard key={post.slug} post={post} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" className="w-20 h-20 mx-auto opacity-20 mb-4" alt="not found" />
              <p className="text-gray-400 text-xl font-medium">No packages found in this category.</p>
              <button onClick={() => { setSearchTerm(""); setCategory("All") }} className="mt-4 text-blue-600 font-bold underline">Reset Filters</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}