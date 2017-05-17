import Link from 'next/link';

const Nav = () => (
  <nav className="navigation">
    <Link prefetch href="/">
      <a className="button navigation__link">Home</a>
    </Link>
    <Link prefetch href="/about">
      <a className="button navigation__link">About us</a>
    </Link>
    <style jsx>{`
      .navigation {
        text-align: center;
      }
      .navigation__link {
        margin-right: 15px;
      }
    `}</style>
  </nav>
);

export default Nav;
