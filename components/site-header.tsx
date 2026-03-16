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
          <a className="header-link header-link--call" href={phoneLink}>
            <span className="header-link__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M7.2 5.8c.4-.4 1-.5 1.5-.2l2 1.2c.6.3.8 1 .6 1.6l-.6 1.9c.9 1.8 2.3 3.2 4.1 4.1l1.9-.6c.6-.2 1.2 0 1.6.6l1.2 2c.3.5.2 1.1-.2 1.5l-1.2 1.2c-.6.6-1.5.9-2.3.7-2.7-.7-5.3-2.2-7.5-4.4S4.3 11.4 3.7 8.7c-.2-.8.1-1.7.7-2.3l1.2-1.2Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            <span>Call Now</span>
          </a>
          <Link
            className="header-pill header-pill--quote"
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            <span>Get a Quote</span>
            <span className="header-pill__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M6 12h12M13 7l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
