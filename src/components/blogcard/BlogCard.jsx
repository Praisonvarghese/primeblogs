import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ item }) => {
  return (
    <Link href={"blog/123"}>
      <div className={styles.blogCard}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={item.img}
              alt=""
              width={250}
              height={205}
              className={styles.pp}
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className={styles.user}>
              <Image
                src={item.img}
                alt=""
                width={26}
                height={26}
                className={styles.useImg}
              />
              <span className={styles.username}>Tech Prime Malayalam</span>
            </div>
            <p className={styles.desc}>{item.desc.substring(0, 200)}.....</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
