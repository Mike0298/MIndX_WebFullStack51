import Head from "next/head";
import Image from "next/image";
import styled from "../styles/Home.module.css";
import { Fragment } from "react";
import { data, data2 } from "./api/data";
import FeaturePosts from "../components/homepage/featurePost";
import axios from "axios";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Mike Blog</title>
      </Head>
      <div className={styled.theme}>
        <div>
          <div className={styled.image_container}>
            <Image
              src="https://static.cashbacker.com/imgs/blank-avatar.png"
              alt="avatar"
              width={300}
              height={300}
              className={styled.image}
            />
          </div>
          <div className={styled.details}>
            <div className={styled.title}>Hi, I&#39;m Mike</div>
            <div>
              I blog about web development - esspecially frontend <br />
              framework like Angular or React
            </div>
          </div>
        </div>
      </div>
      <FeaturePosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  if (data2.length === 0) {
    const res = await axios.get(
      "https://615ba2254a360f0017a816ab.mockapi.io/api/posts"
    );
    for (let post of res.data) {
      data2.push(post);
    }
  }
  const blogData = data2;
  return {
    props: {
      posts: blogData,
    },
  };
}

export default Home;
