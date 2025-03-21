import styles from "./about.module.css"
import Image from "next/image";


export const metadata = {
    title: "About Page",
    description: "About description",
}

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Lorem Ipsum</h2>
                <h1 className={styles.title}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h1>
                <p className={styles.desc}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/about.png"
                    alt="About Image"
                    fill
                    className={styles.img}
                />
            </div>
        </div>
    );
};

export default AboutPage;