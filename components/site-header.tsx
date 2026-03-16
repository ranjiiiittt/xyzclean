"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contactDetails, primaryNav } from "@/data/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneLink = `tel:${contactDetails.phone.replace(/\s/g, "")}`;

  return (
    <header className={`site-header${isOpen ? " is-open" : ""}`}>
      <div className="site-header__inner">
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <Image src="/brand-mark.svg" alt="xyzclean" width={40} height={40} priority />
          <span className="brand__wordmark">xyzclean</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="primary-nav" id="primary-nav">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-link" href={phoneLink}>
            Call Now
          </a>
          <Link className="header-pill" href="/contact" onClick={() => setIsOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
