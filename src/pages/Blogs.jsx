import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Risezonic Travel Blog – Travel Tips, Destinations & Inspiration</title>
        <meta
          name="description"
          content="Explore Risezonic Travel’s blog for travel tips, destination guides, holiday ideas, and trip inspiration. Learn from expert insights and real travel stories."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/blogs" />
      </Helmet>
      {/* Travel Blog & Travel Guides */}
    </div>
  );
}
