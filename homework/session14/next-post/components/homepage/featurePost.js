import PostItem from "./postItem";
import styled from "./featurePost.module.css";

function FeaturePosts(props) {
  return (
    <div className={styled.theme}>
      <div className={styled.title}>Featured Posts</div>
      <div className={styled.items}>
        {props.posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default FeaturePosts;
