import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const VideoCard = ({ item }) => {
  return (
    <Link href={`/blog/${item.url}`}>
      <div className={styles.catCard}>
        <div className={styles.container}>
          {item?.url ? (
            <iframe
              width="324"
              height="200"
              src={item.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <Image
              src={item.img}
              alt=""
              width={324}
              height={200}
              className={styles.blogimg}
            />
          )}
          <div className={styles.info}>
            <div className={styles.user}>
              <Image
                src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={30}
                height={30}
                className={styles.pp}
              />
              <span className={styles.username}>Tech Prime Malayalam</span>
            </div>
            <p className={styles.desc}>{item.desc.substring(0,80)}...</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
