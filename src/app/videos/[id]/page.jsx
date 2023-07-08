import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import TopBlogs from "@/components/top/TopBlogs";

const VideoPost = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <iframe className={styles.videoframe}
              width="900"
              height="450"
              src="https://www.youtube-nocookie.com/embed/KI5CnJ9u5ok"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>
              വാട്ട്സ്ആപ്പിലെ &#39;ശല്യം വിളികളെ&#39; ഒഴിവാക്കാം; കാത്തിരുന്ന
              ഫീച്ചര്‍ എത്തി.!
            </h1>
          </div>
          <div className={styles.author}>
            <Image
              src="/man.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <div className={styles.blogInfo}>
              <span className={styles.username}>Tech Prime Malayalam</span>
              <span className={styles.time}>5 Days Ago</span>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <TopBlogs />
        </div>
      </div>
    </div>
  );
};

export default VideoPost;
