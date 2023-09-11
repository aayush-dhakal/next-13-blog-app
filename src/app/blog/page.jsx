import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// server side data fetching
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    // cache: "force-cache", // if the data is static and never changes then use this force-cache as it will cache the data indefinitely. also this is the default behaviour
    // next: { revalidate: 10 }, // if the data changes sometimes then this revalidate will fetch the new data after every 10 seconds until then the data will be cached
    cache: "no-cache", // if the data is always changing ie very dymanic the apply no cache
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// server side data fetching
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     // cache: "force-cache", // if the data is static and never changes then use this force-cache as it will cache the data indefinitely. also this is the default behaviour
//     // next: { revalidate: 10 }, // if the data changes sometimes then this revalidate will fetch the new data after every 10 seconds until then the data will be cached
//     cache: "no-cache", // if the data is always changing ie very dymanic the apply no cache
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// make sure to mark your component as async when using server side data fetching with it
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
