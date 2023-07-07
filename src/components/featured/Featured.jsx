"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { items } from "./data.js";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const FeaturedBlogs = () => {
  const [showBlog, setShowBlog] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "left") {
      if (showBlog === 0) {
        setShowBlog(items.length - 1);
      } else {
        setShowBlog((prev) => prev - 1);
      }
    }

    if (direction === "right") {
      if (showBlog === items.length - 1) {
        setShowBlog(0);
      } else {
        setShowBlog((prev) => prev + 1);
      }
    }
  };
  console.log(showBlog);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.blogs}>
          <AiOutlineArrowLeft
            onClick={() => handleArrow("left")}
            className={styles.leftArrow}
          />
          {items?.map((item) => (
            <div
              style={{ transform: `translateX(-${showBlog * 950}px)` }}
              className={styles.blog}
              key={item.id}
            >
              <Image
                src={item?.image}
                alt=""
                width={950}
                height={550}
                className={styles.image}
              />
              <h2>{item?.desc}</h2>
            </div>
          ))}
          <AiOutlineArrowRight
            onClick={() => handleArrow("right")}
            className={styles.rightArrow}
          />
        </div>

        <div className={styles.blogsResponsive}>
          <AiOutlineArrowLeft
            onClick={() => handleArrow("left")}
            className={styles.leftArrow}
          />
          {items?.map((item) => (
            <div
              style={{ transform: `translateX(-${showBlog * 350}px)` }}
              className={styles.blog}
              key={item.id}
            >
              <Image
                src={item?.image}
                alt=""
                width={350}
                height={250}
                className={styles.image}
              />
              <h2>{item?.desc}</h2>
            </div>
          ))}
          <AiOutlineArrowRight
            onClick={() => handleArrow("right")}
            className={styles.rightArrow}
          />
        </div>



        <div className={styles.dots}>
          {items?.map((item, index) => (
            <div
              onClick={() => setShowBlog(index)}
              className={`${styles.dot} ${
                showBlog === index && styles.activeDot
              }`}
              key={item.id}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
