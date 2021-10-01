import React from "react";
import "tailwindcss/tailwind.css";
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex m-3 items-center flex-row justify-between mx-10 align-center">
      <div className="text-3xl ">NITA-CP</div>
      <div className="w-80">
        <ul className="flex flex-wrap justify-between text-xl ">
        <li className="navhome">
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
            <Link href="/blog">
              <a>Blog Post</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
