import Link from "next/link";
import Logo from "./logo";

export default function MainNavigation() {
  return (
    <header>
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
