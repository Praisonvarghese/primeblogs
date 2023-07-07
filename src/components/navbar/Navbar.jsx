"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { links } from "../../data.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.text}>PrimeBlogs</span>
          </Link>
          <span className={styles.dot}>.</span>
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          <button className={styles.button}>SignIn</button>
        </div>
        <div  onClick={() => setOpen(!open)} className={styles.hamburger} >
          <div className={styles.menuLine} />
          <div className={styles.menuLine} />
          <div className={styles.menuLine} />
        </div>
        <div onClick={()=>setOpen(false)} className={styles.mobileLinks} style={{ right: open ? "0px" : "-50vw" }}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.mobileLink}>
              {link.title}
            </Link>
          ))}
          <button className={styles.button}>SignIn</button>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.menu}>
        <span className={styles.menuitem}>Graphics & Design</span>
        <span className={styles.menuitem}>Video & Animation</span>
        <span className={styles.menuitem}>Writing & Translation</span>
        <span className={styles.menuitem}>AI Services</span>
        <span className={styles.menuitem}>Digital Marketing</span>
        <span className={styles.menuitem}>Music & Audio</span>
        <span className={styles.menuitem}>Programming & Tech</span>
        <span className={styles.menuitem}>Business</span>
        <span className={styles.menuitem}>Lifestyle</span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Navbar;
