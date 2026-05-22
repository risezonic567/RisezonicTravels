import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Helmet } from "react-helmet";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import BlogCard from "../components/Blog/BlogCard";
import useReadingProgress from "../hooks/useReadingProgress";
import { useEffect } from "react";
// import HomeNav from "../layout/HomeNav";
import HomeNav from "../components/Navbar";

export default function PostDetail() {
  const progress = useReadingProgress();
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
 useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!post) return <div className="text-center mt-20">Post Not Found</div>;

  // Table of Contents — auto from post.content headings
  const toc = post.toc || [];

  // Related Posts
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
     <HomeNav />
    <div className="max-w-6xl mx-auto px-4 py-8 pt-32 relative">
      <Helmet>
        <title>{post.metatitle}</title>
        <meta name="description" content={post.metadescription} />
        <link rel="canonical" href={post.canonical} />
        <meta name="keywords" content={post.metakeyword} />

      </Helmet>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50"
        style={{ width: `${progress}%` }}
      />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <span>Home</span> → <span>Blog</span> →
        <span className="text-gray-800 font-medium"> {post.category}</span>
      </div>

      {/* Blog Image */}
      {/* <img
        src={post.image}
        className="w-full rounded-xl shadow mb-6 "
      /> */}

      {/* Header */}
      <h1 className="text-4xl font-bold">{post.title}</h1>

      <div className="mt-3 flex items-center gap-4 text-gray-500 text-sm">
        <img src={post.authorAvatar} className="w-10 h-10 rounded-lg" />
        <span>{post.author}</span> • <span>{post.date}</span> • <span>{post.readTime}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 mt-10">

        {/* Content */}
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* TOC Sidebar */}
        {toc.length > 0 && (
          <aside className="sticky top-28 bg-white shadow rounded-xl p-6 h-fit">
            <h3 className="font-bold mb-3 text-lg">On This Page</h3>
            <ul className="space-y-2 text-indigo-600">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-indigo-800">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      {/* Share */}
      <div className="mt-10 flex gap-3">
        <FacebookShareButton url={window.location.href}>
          <FaFacebook size={22} className="text-blue-600" />
        </FacebookShareButton>

        <TwitterShareButton url={window.location.href}>
          <FaTwitter size={22} className="text-sky-500" />
        </TwitterShareButton>

        <LinkedinShareButton url={window.location.href}>
          <FaLinkedin size={22} className="text-blue-800" />
        </LinkedinShareButton>
      </div>

      {/* Related Posts */}
      <h2 className="text-2xl font-bold mt-16 mb-6">Related Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>

    </div>
    </>
  );
}
