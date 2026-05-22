import { Link } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
      {/* Image with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4">
        {/* Category Tag */}
        <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
          {post.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold mt-2 text-gray-800 line-clamp-2">
          {post.title}
        </h2>

        {/* Author info */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src={post.authorAvatar}
            className="w-7 h-7 rounded-full object-cover"
          />
          <p className="text-sm text-gray-500">{post.author}</p>
        </div>

        {/* Meta */}
        <p className="text-sm text-gray-400">
          {post.readTime} • {post.date}
        </p>

        {/* Excerpt */}
        <p className="text-gray-700 mt-2 line-clamp-4">{post.excerpt}</p>

        {/* Views / Likes */}
        <div className="flex justify-between text-xs text-gray-500 mt-3">
          <span className="flex items-center gap-1"><FaEye /> {post.views}</span>
          <span className="flex items-center gap-1"><FaHeart /> {post.likes}</span>
        </div>

        <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-semibold mt-4 inline-block">
          Read More →
        </Link>
      </div>
    </div>
  );
}
