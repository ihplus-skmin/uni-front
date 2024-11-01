"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  return (
   <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> { pathname === "/" ?  "ee": ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link> { pathname === "/about-us" ?  "ee": ""}
        </li>
        <li>
          <button type="button" onClick={() => setCount(c => c + 1) }>{count}</button>
        </li>
      </ul>
    </nav>
  )
}