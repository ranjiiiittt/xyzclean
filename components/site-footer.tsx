import Link from "next/link";
import Image from "next/image";
import { contactDetails, footerGroups } from "@/data/site-content";

export function SiteFooter() {
  const phoneLink = `tel:${contactDetails.phone.replace(/\s/g, "")}`;

  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <Link className="brand brand--footer" href="/">
          <Image src="/brand-mark.svg" alt="xyzclean" width={40} height={40} />
          <span className="brand__wordmark">xyzclean</span>
        </Link>
        <p>
          Residential, commercial, and specialised cleaning for homes, workplaces,
          rentals, and managed properties across Australia.
        </p>
        <div className="site-footer__contact">
          <a href={phoneLink}>{contactDetails.phone}</a>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
      </div>

      <div className="site-footer__grid">
        {footerGroups.map((group) => (
          <div className="site-footer__group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="site-footer__links">
              {group.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
