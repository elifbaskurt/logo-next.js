import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem Ipsum Lorem.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>Learn More</button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brandımage"
            fill
            className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="heroImage"
          fill
          className={styles.heroImg} />
      </div>
    </div>

  );
};
export default Home;

