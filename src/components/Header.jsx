"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div>
          <Link href="/" className="logo instrument-sans-bold">
            CUTZCLUB
          </Link>
        </div>
        <div className="toggle-btn"></div>
        <nav>
          <ul className="josefin-sans-semiblod">
            <li>
              <Link href="/profile" className="nav-link-item josefin-sans-semiblod">
                Find a Barber/Stylist
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link-item">
                For Barbers & Stylist
              </Link>
            </li>
            <li>
              <Link href="/#membership" className="nav-link-item josefin-sans-semiblod">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/#how-it-work" className="nav-link-item">
                How It Work
              </Link>
            </li>
          </ul>
        </nav>
        <div className="btn-grp">
          <Link href="/login" className="nav-btn secondry-btn sm-hidden">
            Login
          </Link>
          <Link href="/signup" className="nav-btn primary-btn sm-hidden">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
