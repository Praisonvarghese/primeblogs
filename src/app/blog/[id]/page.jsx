import React from "react";
import styles from "./page.module.css";
import TrendingVideos from "@/components/trending/TrendingVideos";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.right}>
        <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>
          വാട്ട്സ്ആപ്പിലെ &#39;ശല്യം വിളികളെ&#39; ഒഴിവാക്കാം; കാത്തിരുന്ന ഫീച്ചര്‍ എത്തി.!
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

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius tempora hic at consequuntur nemo quaerat corrupti error aperiam, rerum atque a, voluptatibus quis aliquam. Cupiditate vero dolorum ab ullam, eaque repudiandae debitis optio eligendi dolore ipsam ut ex perspiciatis provident laborum.<br/> <br/> Rem facere modi sint sunt sequi harum, dolore tempora obcaecati quae debitis fugiat. Sit perferendis possimus ipsum consequuntur nesciunt dolores, iste incidunt voluptatum debitis illo deleniti molestiae odit optio soluta doloribus! Harum, dicta?<br/> <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aperiam, iste nam laudantium dolorem explicabo at nihil sit dignissimos nulla hic aliquam facere molestias ullam asperiores animi officiis in id assumenda distinctio! Tempora, velit veniam! Delectus nulla error magni. Doloribus optio, autem aliquam provident iure, id impedit reiciendis reprehenderit delectus maiores, ratione unde eius neque eveniet illum quae magni beatae laudantium illo aut quisquam! <br/> <br/> Laboriosam iusto corrupti nobis asperiores quisquam ducimus est temporibus optio quis?
        </p>
      </div>
        </div>
        <div className={styles.left}>
          <TrendingVideos />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
