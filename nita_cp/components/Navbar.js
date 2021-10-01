import React from "react";
import "tailwindcss/tailwind.css";
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex flex-row justify-between mx-10 align-center">
      <div className="text-3xl m-2">NITA-CP</div>
      <div>
        <ul className="flex justify-between m-2">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a>Blog Post</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
