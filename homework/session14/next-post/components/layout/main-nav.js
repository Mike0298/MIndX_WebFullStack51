import Link from "next/link";
import styled from "./main-nav.module.css";

const MainNav = (props) => {
  return (
    <header className={styled.theme}>
      <div className={styled.title}>
        <Link href="/"> Mike Next Blog</Link>
      </div>
      <div className={styled.nav}>
        <div>
          <Link href="/posts">Posts </Link>
        </div>
        <div>
          <Link href="/contact"> Contact </Link>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
