import BlogCard from "@/components/blogcard/BlogCard";
import styles from "./page.module.css";
import { blogs } from "../../data.js";
import TrendingVideos from "@/components/trending/TrendingVideos";

const Blog = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.container}>
        <div className={styles.right}>
          <h1 className={styles.title}>Blogs</h1>
          <p className={styles.subtitle}>
            Explore the boundaries of art and technology with Liverr&#39;s AI
            artists
          </p>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} item={blog} />
          ))}
        </div>
        <div className={styles.left}>
          <TrendingVideos />
        </div>
      </div>
    </div>
  );
};

export default Blog;
