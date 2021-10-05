import Link from "next/link";

const MainNav = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts </Link>
          </li>
          <li>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
