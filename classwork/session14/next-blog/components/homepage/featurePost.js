import PostItem from "./postItem";

function FeaturePosts(props) {
  return (
    <section>
      <h2>Feature Posts</h2>
      <ul>
        {props.posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
      </ul>
    </section>
  );
}

export default FeaturePosts;
