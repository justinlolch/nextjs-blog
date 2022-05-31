import Link from "next/link";
import Logo from "./logo";
import classes from '../../styles/main-navigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* Link will not render an anchor tag by default, but just plain text. => add anchor tag */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
