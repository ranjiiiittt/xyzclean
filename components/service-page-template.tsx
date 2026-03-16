import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqGrid } from "@/components/faq-grid";
import { ServicePageContent, servicePages } from "@/data/site-content";

type ServicePageTemplateProps = {
  page: ServicePageContent;
};

const toneClasses = [
  "section-shell--sky",
  "section-shell--sand",
  "section-shell--mint",
  "section-shell--sea"
];

const serviceVisuals: Record<
  string,
  { src: string; alt: string; caption: string }
> = {
  "residential-cleaning": {
    src: "/hero-suite.svg",
    alt: "Fresh living room after residential cleaning",
    caption: "Flexible home cleaning support for busy households, rentals, and move-related cleans."
  },
  "house-cleaning": {
    src: "/hero-suite.svg",
    alt: "Bright home interior prepared for a house cleaning service",
    caption: "Regular and one-off house cleaning designed to keep daily life easier to manage."
  },
  "end-of-lease-cleaning": {
    src: "/quality-checklist.svg",
    alt: "Checklist illustration for an end of lease cleaning service",
    caption: "Inspection-focused cleaning with the option to add ovens, windows, and carpet steam cleaning."
  },
  "commercial-cleaning": {
    src: "/office-lounge.svg",
    alt: "Commercial lounge and reception area presented after cleaning",
    caption: "Commercial scopes built around presentation standards, site access, and daily operations."
  },
  "office-cleaning": {
    src: "/office-lounge.svg",
    alt: "Fresh office lounge and waiting area",
    caption: "Office cleaning for reception areas, meeting rooms, kitchens, washrooms, and workstations."
  },
  "airbnb-cleaning": {
    src: "/essentials-kit.svg",
    alt: "Guest-ready cleaning essentials for a short-stay property",
    caption: "Turnover cleaning built around booking windows, linen changeovers, and guest presentation."
  },
  "ndis-cleaning": {
    src: "/essentials-kit.svg",
    alt: "Household support tools and folded linen",
    caption: "Respectful household support tailored to participant routines, preferences, and home environments."
  },
  "strata-cleaning": {
    src: "/office-lounge.svg",
    alt: "Shared property and building common area",
    caption: "Reliable common-area cleaning for foyers, hallways, lifts, stairwells, and shared amenities."
  },
  "medical-cleaning": {
    src: "/quality-checklist.svg",
    alt: "Checklist illustration representing risk-aware cleaning",
    caption: "Cleaning programs aligned to site protocols, patient-facing areas, and high-touch surfaces."
  },
  "childcare-cleaning": {
    src: "/quality-checklist.svg",
    alt: "Checklist illustration for routine cleaning and quality control",
    caption: "Extra care for high-touch areas, parent-facing spaces, floors, and shared play environments."
  },
  "builders-cleaning": {
    src: "/quality-checklist.svg",
    alt: "Presentation checklist for handover cleaning",
    caption: "Post-construction cleaning to remove dust, residue, and surface marks before handover."
  }
};

function getHighlights(page: ServicePageContent) {
  return page.sections.find((section) => section.items?.length)?.items?.slice(0, 4) ?? [];
}

function getRelatedServices(page: ServicePageContent) {
  return servicePages
    .filter((service) => service.category === page.category && service.slug !== page.slug)
    .slice(0, 4);
}

export function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  const visual = serviceVisuals[page.slug] ?? serviceVisuals["commercial-cleaning"];
  const highlights = getHighlights(page);
  const relatedServices = getRelatedServices(page);

  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">{page.category}</p>
          <h1>{page.heroTitle}</h1>
          <p className="page-hero__lead">{page.heroText}</p>
          <div className="hero-copy__actions">
            <Link
              className="button button--primary"
              href={`/contact?service=${encodeURIComponent(page.label)}`}
            >
              {page.primaryCta}
            </Link>
            {page.secondaryCta ? (
              <Link className="button button--ghost" href="/contact">
                {page.secondaryCta}
              </Link>
            ) : null}
          </div>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image src={visual.src} alt={visual.alt} width={760} height={540} />
            <div className="content-card__body">
              <p className="stack-label">{page.label}</p>
              <p>{visual.caption}</p>
            </div>
          </article>

          {highlights.length ? (
            <article className="content-card">
              <p className="stack-label">{page.sections[0]?.title ?? "Service highlights"}</p>
              <ul className="detail-list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}

          {page.supportPoints?.length ? (
            <article className="content-card">
              <p className="stack-label">Popular schedules</p>
              <div className="mini-chip-grid">
                {page.supportPoints.map((point) => (
                  <span className="mini-chip" key={point}>
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ) : null}
        </aside>
      </section>

      {page.sections.map((section, index) => (
        <section
          className={`section section-shell ${toneClasses[index % toneClasses.length]}`}
          key={`${page.slug}-${section.title}`}
        >
          <div className="section-heading">
            {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
            <h2>{section.title}</h2>
            {section.intro ? <p>{section.intro}</p> : null}
          </div>

          {section.groups?.length ? (
            <div className="group-grid">
              {section.groups.map((group, groupIndex) => (
                <article className={`group-card group-card--${groupIndex % 4}`} key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="detail-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ) : null}

          {section.items?.length ? (
            <div className="info-grid">
              {section.items.map((item) => (
                <article className="info-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.note ? <p className="section-note">{section.note}</p> : null}
        </section>
      ))}

      {relatedServices.length ? (
        <section className="section section-shell section-shell--cream">
          <div className="section-heading">
            <p className="eyebrow">Related services</p>
            <h2>Looking for a similar service?</h2>
            <p>
              Explore related service pages to compare cleaning options, scheduling
              styles, and the type of property each service is designed for.
            </p>
          </div>

          <div className="link-grid">
            {relatedServices.map((service) => (
              <Link className="link-card" href={`/services/${service.slug}`} key={service.slug}>
                <p className="stack-label">{service.category}</p>
                <h3>{service.label}</h3>
                <span>View service page</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {page.faqs?.length ? (
        <section className="section section-shell section-shell--cream">
          <div className="section-heading">
            <p className="eyebrow">FAQs</p>
            <h2>Questions clients often ask before booking</h2>
            <p>
              If you need help with scope, inclusions, scheduling, or site access,
              our team can confirm the details when preparing your quote.
            </p>
          </div>
          <FaqGrid items={page.faqs} />
        </section>
      ) : null}

      <section className="section">
        <CtaBand
          eyebrow="Next step"
          title={page.finalCtaTitle}
          body={page.finalCtaBody}
          primaryHref={`/contact?service=${encodeURIComponent(page.label)}`}
          primaryLabel={page.finalPrimaryCta}
          secondaryHref={page.finalSecondaryCta ? "/contact" : undefined}
          secondaryLabel={page.finalSecondaryCta}
        />
      </section>
    </main>
  );
}
