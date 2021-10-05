import styled from "../styles/Posts.module.css";
import { data2 } from "./api/data";
import PostCollection from "../components/Posts collection/postCollection";

const Posts = (props) => {
  return (
    <div>
      <div className={styled.page_title}>All posts</div>
      <PostCollection posts={props.posts} />
    </div>
  );
};

export function getStaticProps() {
  const blogData = data2;
  return {
    props: {
      posts: blogData,
    },
  };
}

export default Posts;
