import styles from "./page.module.css";
import FeaturedBlogs from "@/components/featured/Featured";
import TopBlogs from "@/components/top/TopBlogs";
import VideoCard from "@/components/videoCard/VideoCard";
import { items } from "../data.js";
import { blogs } from "../data.js";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.featured}>
          <FeaturedBlogs />
          <TopBlogs />
        </div>
        <span className={styles.heading}>
           Top Videos
        </span>
        <div className={styles.cards}>
          {items.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
        <span className={styles.heading}>
           Top Blogs
        </span>
        <div className={styles.cards}>
          {blogs.map((blog) => (
            <VideoCard key={blog.id} item={blog} />
          ))}
        </div>

      </div>
    </div>
  );
}
