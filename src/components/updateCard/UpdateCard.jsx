import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const UpdateCard = () => {
  return (
    <div className={styles.item}>
      <div className={styles.user}>
        <Image
          src="/man.png"
          alt=""
          width={50}
          height={50}
          className={styles.pp}
        />
        <div className={styles.info}>
          <span>Admin</span>
          <span className={styles.date}>1 hour Ago</span>
        </div>
      </div>
      <p className={styles.desc}>
        ആമസോണിനും ഫ്ലിപ്കാർട്ടിനെയും തങ്ങളുടെ പ്രധാന ദൌത്യത്തിലേക്ക് ക്ഷണിച്ച് കേന്ദ്രം.!
      </p>
      <div className={styles.helpful}>
        <span>Helpful?</span>
        <Image
          src="/dislike.png"
          alt=""
          width={15}
          height={15}
          className={styles.helpfulimg}
        />
        <span>Yes</span>
        <Image
          src="/like.png"
          alt=""
          width={15}
          height={15}
          className={styles.helpfulimg}
        />
        <span>No</span>
      </div>
    </div>
  );
};

export default UpdateCard;
