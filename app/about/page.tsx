import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { aboutPage } from "@/data/site-content";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription
};

const toneClasses = [
  "section-shell--sand",
  "section-shell--mint",
  "section-shell--sky",
  "section-shell--sea",
  "section-shell--cream"
];

export default function AboutPage() {
  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">About xyzclean</p>
          <h1>{aboutPage.heroTitle}</h1>
          <p className="page-hero__lead">{aboutPage.heroText}</p>
          <div className="hero-copy__actions">
            <Link className="button button--primary" href="/contact">
              Get a Free Quote
            </Link>
            <Link className="button button--ghost" href="/services">
              View Services
            </Link>
          </div>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image
              src="/office-lounge.svg"
              alt="Polished office and waiting area"
              width={760}
              height={620}
            />
            <div className="content-card__body">
              <p className="stack-label">What we value</p>
              <ul className="detail-list">
                {aboutPage.sections[1]?.items?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </aside>
      </section>

      {aboutPage.sections.map((section, index) => (
        <section
          className={`section section-shell ${toneClasses[index % toneClasses.length]}`}
          key={section.title}
        >
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>{section.title}</h2>
            {section.intro ? <p>{section.intro}</p> : null}
          </div>

          {section.items?.length ? (
            <div className="info-grid">
              {section.items.map((item) => (
                <article className="info-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      <section className="section">
        <CtaBand
          eyebrow="Work with us"
          title="Looking for a cleaning team built on reliability and detail?"
          body="Tell us about your household, workplace, or property portfolio and we will tailor a service plan that fits how the space is used."
          primaryHref="/contact"
          primaryLabel="Get a Free Quote"
          secondaryHref="/services"
          secondaryLabel="Explore Services"
        />
      </section>
    </main>
  );
}
