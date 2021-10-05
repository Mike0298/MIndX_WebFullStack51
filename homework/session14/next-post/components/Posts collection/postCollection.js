import PostItem from "../homepage/postItem";
import styled from "./postCollection.module.css";

function PostCollection(props) {
  return (
    <div>
      <div className={styled.items}>
        {props.posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default PostCollection;
