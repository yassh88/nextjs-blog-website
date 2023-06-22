import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

export default function PostItem({ post }) {
  const { title, time, excerpt, image, slug } = post;
  const fDate = new Date(time).toLocaleDateString("en-US");
  return (
    <li className={classes.post}>
      <Link href={`/post/${slug}`}>
        <div className={classes.image}>
          <Image
            src={`/images/post/${slug}/${image}`}
            alt={title}
            width={300}
            height={200}
            layout={"responsive"}
          ></Image>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{fDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
