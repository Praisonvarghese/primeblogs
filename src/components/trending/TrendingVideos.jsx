import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const TrendingVideos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Top Videos</h3>
        <Link href={"videos/123"}>
          <div className={styles.box}>
            <iframe
              width="150"
              height="100"
              src="https://www.youtube-nocookie.com/embed/KI5CnJ9u5ok"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <span className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugit eveniet dignissimos iure libero laborum.
            </span>
          </div>
        </Link>
        <Link href={"videos/123"}>
          <div className={styles.box}>
            <iframe
              width="150"
              height="100"
              src="https://www.youtube.com/embed/4QFGy5LJXRk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <span className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugit eveniet dignissimos iure libero laborum.
            </span>
          </div>
        </Link>
        <Link href={"videos/123"}>
          <div className={styles.box}>
            <iframe
              width="150"
              height="100"
              src="https://www.youtube-nocookie.com/embed/KI5CnJ9u5ok"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <span className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugit eveniet dignissimos iure libero laborum.
            </span>
          </div>
        </Link>
        <Link href={"videos/123"}>
          <div className={styles.box}>
            <iframe
              width="150"
              height="100"
              src="https://www.youtube.com/embed/0RoA5QEm8fc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <span className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugit eveniet dignissimos iure libero laborum.
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrendingVideos;
