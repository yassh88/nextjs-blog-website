import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/my_img.png"
          alt="Yashwant Image"
          width={300}
          height={300}
        />
      </div>
      <h1>I am Yashwant</h1>
      <p>I am react js app developer, I love to learn new things</p>
    </section>
  );
}
