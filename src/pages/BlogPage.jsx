import React, { useState, useEffect } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/Blog/BlogCard";
import { Helmet } from "react-helmet";
import HomeNav from "../components/Navbar"
// import HomeNav from "../layout/HomeNav";
import { FiSearch, FiFilter } from "react-icons/fi"; // Icons install kar lena: npm install react-icons

export default function BlogPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const categories = ["All", ...new Set(blogPosts.map(p => p.category))];

  let filtered = blogPosts.filter(
    post =>
      (category === "All" || post.category === category) &&
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
        <title>Risezonic Travel Blog | Tips & Inspiration </title>
        <meta name="description" content="Discover travel blogs from Risezonic Travel. Read expert tips, destination guides, and real travel stories to plan your next family holiday, honeymoon, or adventure trip across India." />
        <meta name="keywords" content="destination guides," />
        <link rel="canonical" href="https://www.risezonictravel.com/blog" />
      </Helmet>

      {/* HERO SECTION - Pehle se better introduction */}
      <div className="bg-blue-950 pt-40 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-yellow-500 mb-4">Travel Inspiration</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
          Expert tips, destination guides, and real travel stories to help you book your next perfect journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* CONTROLS BAR - Sticky and Compact */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100 -mt-24 relative z-20 mb-12">
          
          {/* Search Input with Icon */}
          <div className="relative w-full lg:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Where do you want to go next?"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories - Sleek Pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-full lg:max-w-xl pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 rounded-xl whitespace-nowrap text-sm font-bold transition-all
                  ${category === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown with Style */}
          <div className="w-full lg:w-48">
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
          </div>
        </div>

        {/* RESULTS INFO */}
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold text-blue-700">
                {category === "All" ? "Latest Articles" : `${category} Guides`}
                <span className="text-gray-400 font-normal ml-3 text-lg">({filtered.length})</span>
            </h2>
        </div>

        {/* BLOG GRID - Improved Spacing */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length ? (
            filtered.map(post => <BlogCard key={post.slug} post={post} />)
          ) : (
            <div className="col-span-full py-20 text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" className="w-20 h-20 mx-auto opacity-20 mb-4" alt="not found" />
                <p className="text-gray-400 text-xl font-medium">No articles found in this category.</p>
                <button onClick={() => {setSearchTerm(""); setCategory("All")}} className="mt-4 text-blue-600 font-bold underline">Reset Filters</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}