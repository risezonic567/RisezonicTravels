import React from "react";
import { Link } from "react-router-dom";

export default function PackageCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">

      <img
        src={post.image}
        alt={post.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="font-bold text-lg line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-3">
          {post.excerpt}
        </p>

        <Link to={`/package/${post.slug}`}>
          <button className="mt-4 w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}