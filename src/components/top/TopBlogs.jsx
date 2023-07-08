import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const TopBlogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Top Blogs</h3>
        <Link href={"blog/123"}>
          <div className={styles.box}>
            <Image
              src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={150}
              height={100}
              className={styles.image}
            />
            <span className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugit eveniet dignissimos iure libero laborum.
            </span>
          </div>
        </Link>
        <Link href={"blog/123"}>
          <div className={styles.box}>
            <Image
              src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={150}
              height={100}
              className={styles.image}
            />
            <span className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugit eveniet dignissimos iure libero laborum.
            </span>
          </div>
        </Link>
        <Link href={"blog/123"}>
          <div className={styles.box}>
            <Image
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={150}
              height={100}
              className={styles.image}
            />
            <span className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugit eveniet dignissimos iure libero laborum.
            </span>
          </div>
        </Link>
        <Link href={"blog/123"}>
          <div className={styles.box}>
            <Image
              src="https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={150}
              height={100}
              className={styles.image}
            />
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

export default TopBlogs;
