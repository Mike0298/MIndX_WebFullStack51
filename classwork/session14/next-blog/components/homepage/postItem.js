import Link from "next/link";
import styled from "./postItem.module.css";

function PostItem(props) {
  const { title, date, description, slug } = props.post;
  const linkPost = `/posts/${slug}`;
  return (
    <li className={styled.itemDetail}>
      <Link href={linkPost}>
        <a>
          <div>
            <h3>{title}</h3>
            <h3>{date}</h3>
            <h3>{description}</h3>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
