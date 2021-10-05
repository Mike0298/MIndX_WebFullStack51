import Link from "next/link";
import styled from "./postItem.module.css";

function PostItem(props) {
  const { title, date, description, slug } = props.post;
  const linkPost = `/posts/${slug}`;
  return (
    <div className={styled.itemDetail}>
      <Link href={linkPost}>
        <a>
          <div className={styled.postDetails}>
            <h3 className={styled.title}>{title}</h3>
            <h3 className={styled.date}>{date}</h3>
            <h3>{description}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default PostItem;
