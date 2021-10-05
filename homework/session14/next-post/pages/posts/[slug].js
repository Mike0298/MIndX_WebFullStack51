import { Fragment } from "react";
import Head from "next/head";
import { getPostData, getSlug } from "../api/data";

function postDetailedPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post[0].title}</title>
      </Head>
      <h2>{props.post[0].content}</h2>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const postData = getPostData(context.params.slug);
  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  const slugs = getSlug();
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default postDetailedPage;
