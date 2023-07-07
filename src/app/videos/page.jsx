import VideoCard from "@/components/videoCard/VideoCard";
import styles from "./page.module.css";
import { videos } from "../../data.js";

const Videos = () => {
  return (
    <div className={styles.videos}>
      <div className={styles.container}>
        <h1 className={styles.title}>Videos</h1>
        <p className={styles.subtitle}>
          Explore the boundaries of art and technology with Liverr&#39;s AI artists
        </p>
        <div className={styles.cards}>
        {videos.map((video) => (
            <VideoCard key={video.id} item={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
