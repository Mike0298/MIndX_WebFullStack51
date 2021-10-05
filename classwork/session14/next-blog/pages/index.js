import Head from "next/head";
import { Fragment } from "react";
import { data } from "./api/data";
import FeaturePosts from "../components/homepage/featurePost";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Mike Blog</title>
      </Head>
      <h1>Mindx blog content children</h1>
      <FeaturePosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const blogData = data;
  return {
    props: {
      posts: blogData,
    },
  };
}

export default Home;
