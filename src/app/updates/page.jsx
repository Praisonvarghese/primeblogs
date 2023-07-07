import UpdateCard from "@/components/updateCard/UpdateCard";
import styles from "./page.module.css";
import TopBlogs from "@/components/top/TopBlogs";
import TrendingVideos from "@/components/trending/TrendingVideos";

const Updates = () => {
  return (
    <div className={styles.updates}>
      <div className={styles.container}>
        <div className={styles.right}>
          <h1 className={styles.title}>Updates</h1>
          <p className={styles.subtitle}>
            Explore the boundaries of art and technology with Liverr&#39;s AI
            artists
          </p>
          <UpdateCard />
          <hr className={styles.hr} />
          <UpdateCard />
          <hr className={styles.hr} />
          <UpdateCard />
          <hr className={styles.hr} />
          <UpdateCard />
          <hr className={styles.hr} />
          <UpdateCard />
          <hr className={styles.hr} />
          <UpdateCard />
        </div>
        <div className={styles.left}>
          <TopBlogs />
          <TrendingVideos />
        </div>
      </div>
    </div>
  );
};

export default Updates;
