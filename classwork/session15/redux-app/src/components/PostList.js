import { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost() {
    const { posts } = this.props;
    return posts.map((post) => {
      return (
        <div className="post-card" key={post.id}>
          <h2>Title: {post.title}</h2>
          <h2>Body: {post.body}</h2>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div>{this.renderPost()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
