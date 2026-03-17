import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqGrid } from "@/components/faq-grid";
import { QuoteForm } from "@/components/quote-form";
import { contactDetails, homePage, locationsPage } from "@/data/site-content";

export const metadata: Metadata = {
  title:
    "Professional Cleaning Services in Australia | Homes, Offices and More",
  description:
    "Reliable residential and commercial cleaning services across Australia, including house cleaning, office cleaning, end of lease, Airbnb, NDIS, strata, and more.",
};

const heroSupportCards = [
  {
    title: "Booking made simple",
    text: homePage.heroSupport[0],
  },
  {
    title: "Broad service coverage",
    text: homePage.heroSupport[1],
  },
  {
    title: "Tailored planning",
    text: homePage.heroSupport[2],
  },
];

const trustPointCards = [
  { text: homePage.trustPoints[0], icon: "shield" },
  { text: homePage.trustPoints[1], icon: "user-check" },
  { text: homePage.trustPoints[2], icon: "calendar" },
  { text: homePage.trustPoints[3], icon: "property" },
  { text: homePage.trustPoints[4], icon: "leaf" },
  { text: homePage.trustPoints[5], icon: "checklist" },
  { text: homePage.trustPoints[6], icon: "clock" },
] as const;

const brandPromise = [
  "Easy booking",
  "Clear communication",
  "Trained, insured cleaners",
  "Flexible service plans",
  "Strong quality control",
  "Residential and commercial coverage",
];

const industryIcons = [
  "home",
  "briefcase",
  "store",
  "building",
  "medical",
  "childcare",
  "fitness",
  "construction",
] as const;

const whyChooseIcons = [
  "message",
  "plan",
  "spark",
  "clock",
  "checklist",
  "team",
] as const;

const buyerGroups = [
  "Homeowners and busy households",
  "Renters moving out and property managers",
  "Office managers and business owners",
  "Airbnb and short-stay hosts",
  "Strata and body corporate managers",
  "Participants, families, and support coordinators",
];

const processSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    text: "Share the property type, the service you need, and any access or timing notes.",
  },
  {
    step: "02",
    title: "Receive a tailored quote",
    text: "We shape the quote around the scope, property size, and any add-ons you want included.",
  },
  {
    step: "03",
    title: "Confirm your preferred schedule",
    text: "Choose a one-off clean or a recurring plan that fits your household, team, or site.",
  },
  {
    step: "04",
    title: "We clean to your agreed scope",
    text: "Our team follows the checklist and priorities confirmed for your home, office, or property.",
  },
  {
    step: "05",
    title: "Ongoing service or one-off support",
    text: "Keep the service recurring, book again when needed, or add extra detail services later.",
  },
];

function TrustPointIcon({
  icon,
}: {
  icon: (typeof trustPointCards)[number]["icon"];
}) {
  switch (icon) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3 5.5 5.8v5.4c0 4.2 2.5 7.9 6.5 9.8 4-1.9 6.5-5.6 6.5-9.8V5.8L12 3Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="m9.3 12.2 1.8 1.8 3.7-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "user-check":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 12a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M5.8 19.2c1.2-2.4 3.6-3.8 6.2-3.8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="m15.8 16.8 1.5 1.5 3-3.1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="4.5"
            y="5.5"
            width="15"
            height="14"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 3.8v3.4M16 3.8v3.4M4.8 9.5h14.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="M9.2 13h5.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "property":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.5 18.5V9.8L12 4l7.5 5.8v8.7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M9.2 18.5v-4.2h5.6v4.2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M18.8 5.2c-6.5.2-10.7 4-11 10.1 2.3 1.3 5.4 1.2 7.8-.4 2.8-1.8 4.1-5.2 3.2-9.7Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M8.7 16.7c1.4-2.1 3.5-4 6.1-5.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "checklist":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="6"
            y="4.5"
            width="12"
            height="15"
            rx="2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9 8.6h5.7M9 12.1h5.7M9 15.6h5.7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="m5.2 8.6.8.8 1.4-1.5m-2.2 5 .8.8 1.4-1.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 7.8v4.5l3 1.8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
}

function IndustryIcon({ icon }: { icon: (typeof industryIcons)[number] }) {
  switch (icon) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.5 18.5V10L12 4l7.5 6v8.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M9.2 18.5v-4.4h5.6v4.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="4.5"
            y="7"
            width="15"
            height="11"
            rx="2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9 7V5.6c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6V7M4.8 11.4h14.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "store":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 9.4 6.2 5.6h11.6L19 9.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M5 9.4h14v8.9H5z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M9.1 18.3v-4.1h5.8v4.1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 19V5.5c0-.8.7-1.5 1.5-1.5h9c.8 0 1.5.7 1.5 1.5V19"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M9 8h1.6M13.4 8H15M9 11.5h1.6M13.4 11.5H15M9 15h1.6M13.4 15H15"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "medical":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="7.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 8.2v7.6M8.2 12h7.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "childcare":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7.4 11.1a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6ZM16.6 11.1a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6ZM12 9.8a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4.8 17.9c.8-1.8 2.4-2.9 4.2-2.9 1.3 0 2.5.5 3.4 1.5M12.2 16.4c.9-.9 2-1.4 3.2-1.4 1.8 0 3.4 1.1 4.2 2.9"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "fitness":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 10v4M8.5 8.2v7.6M15.5 8.2v7.6M18 10v4M8.5 12h7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5.8 18.5h12.4M8.2 18.5v-4.6l3.8-2.5 3.8 2.5v4.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M8.8 9.9h6.4l-1.2-2.6H10l-1.2 2.6ZM10.3 7.3V5.8h3.4v1.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
}

function WhyChooseIcon({ icon }: { icon: (typeof whyChooseIcons)[number] }) {
  switch (icon) {
    case "message":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 6.2h12c1 0 1.8.8 1.8 1.8v7.1c0 1-.8 1.8-1.8 1.8H11l-4.8 3v-3H6c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M8.6 10h6.8M8.6 13.2h4.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "plan":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="5"
            y="4.5"
            width="14"
            height="15"
            rx="2.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 8.2h8M8 11.7h8M8 15.2h5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="m12 4.5 1.4 3.6L17 9.5l-3.6 1.4L12 14.5l-1.4-3.6L7 9.5l3.6-1.4L12 4.5ZM18.2 14.8l.8 2 .9.4-.9.4-.8 2-.8-2-.9-.4.9-.4.8-2ZM6 15.2l1 2.5 2.5 1-2.5 1L6 22.2l-1-2.5-2.5-1 2.5-1 1-2.5Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 7.8v4.5l3 1.8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "checklist":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="6.2"
            y="4.5"
            width="11.6"
            height="15"
            rx="2.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9.2 8.6h4.8M9.2 12h4.8M9.2 15.4h4.8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="m5 8.6.8.8 1.3-1.4m-2.1 4.8.8.8 1.3-1.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M9 11.3a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4ZM15.7 10.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4.8 18.2c.9-2.1 2.8-3.3 4.9-3.3s4 1.2 4.9 3.3M14.1 18.2c.6-1.5 1.9-2.4 3.4-2.4 1 0 1.9.3 2.7 1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">{homePage.hero.eyebrow}</p>
          <h1 style={{ fontSize: "5rem" }}>{homePage.hero.title}</h1>
          <p className="hero-copy__lead">{homePage.hero.text}</p>

          <div className="hero-copy__actions">
            <Link className="button button--primary" href="/contact">
              {homePage.hero.primaryCta}
            </Link>
            <a
              className="button button--ghost"
              href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
            >
              {homePage.hero.secondaryCta}
            </a>
          </div>

          <div className="hero-copy__list">
            {heroSupportCards.map((item, index) => (
              <article className="hero-support-card" key={item.title}>
                <span className="hero-support-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-stage__card hero-stage__card--main">
            <Image
              src="/heroMainImage.png"
              alt="Freshly presented living room after professional cleaning"
              width={760}
              height={640}
              priority
            />
          </div>

          <div className="hero-stage__note hero-stage__note--top">
            <span>Fast response</span>
            <strong>
              Quotes turned around quickly for homes, rentals, and workplaces
            </strong>
          </div>

          <div className="hero-stage__note hero-stage__note--bottom">
            <span>Coverage</span>
            <strong>
              House cleaning, office cleaning, end of lease, strata, and
              specialised services
            </strong>
          </div>

          <div className="hero-stage__card hero-stage__card--accent">
            <Image
              src="/heroAccentImage.png"
              alt="Premium cleaning essentials and folded towels"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Trust points">
        <div className="logo-strip">
          {trustPointCards.map((item) => (
            <article className="logo-chip" key={item.text}>
              <span className="logo-chip__mark" aria-hidden="true">
                <TrustPointIcon icon={item.icon} />
              </span>
              <div className="logo-chip__copy">
                <strong>{item.text}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--mint">
        <div className="section-shell__split">
          <div className="section-shell__content">
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Brand promise</p>
              <h2>
                Reliable, detail-focused cleaning for homes, rentals,
                workplaces, and specialised facilities across Australia
              </h2>
              <p>
                We make the process easy to book, easy to manage, and easy to
                trust, with clear communication and service plans shaped around
                the property.
              </p>
            </div>

            <div className="info-grid info-grid--compact brand-promise-grid">
              {brandPromise.map((item) => (
                <article className="info-card brand-promise-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="section-shell__visual">
            <article className="content-card content-card--media">
              <Image
                src="/brandPromiseImage.png"
                alt="Polished reception and office lounge space"
                width={1536}
                height={1024}
              />
              <div className="content-card__body">
                <p className="stack-label">Who we help</p>
                <ul className="detail-list">
                  {buyerGroups.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section section-shell section-shell--sand"
        id="services"
      >
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Cleaning services built around the way you live and work</h2>
          <p>
            Choose from residential, commercial, and specialised cleaning
            services designed for everyday support, handovers, recurring upkeep,
            and presentation-focused spaces.
          </p>
        </div>

        <div className="services-grid services-grid--wide">
          {homePage.serviceCards.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link className="text-link" href={service.href}>
                {service.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--sea">
        <div className="section-shell__split">
          <div className="section-shell__content">
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Why choose us</p>
              <h2>Why clients choose us</h2>
              <p>
                Good cleaning is not just about finishing the checklist. It is
                about showing up reliably, communicating clearly, and keeping
                the property easier to maintain between visits.
              </p>
            </div>

            <div className="info-grid why-choose-grid">
              {homePage.whyChooseUs.map((item, index) => (
                <article className="info-card why-choose-card" key={item}>
                  <span className="why-choose-card__icon" aria-hidden="true">
                    <WhyChooseIcon
                      icon={whyChooseIcons[index % whyChooseIcons.length]}
                    />
                  </span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="section-shell__visual">
            <article className="content-card content-card--media">
              <Image
                src="/whyChooseUsImage.png"
                alt="Checklist and quality control illustration"
                width={1536}
                height={1024}
              />
              <div className="content-card__body">
                <p className="stack-label">Quality control</p>
                <p>
                  Detailed scopes, practical checklists, and follow-up support
                  help keep service consistent across homes, offices, and
                  managed sites.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section workflow-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>How our process works</h2>
          <p>
            From the first enquiry through to recurring service, the process is
            kept straightforward so you can get the right clean without
            unnecessary back-and-forth.
          </p>
        </div>

        <div className="workflow-grid workflow-grid--five">
          {processSteps.map((item) => (
            <article className="workflow-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="hero-copy__actions">
          <Link className="button button--primary" href="/contact">
            Request My Quote
          </Link>
          <Link
            className="button button--ghost"
            href="/contact?service=Commercial%20Cleaning"
          >
            Book a Site Visit
          </Link>
        </div>
      </section>

      <section className="section section-shell section-shell--sky">
        <div className="section-heading">
          <p className="eyebrow">Popular services</p>
          <h2>Popular cleaning services people book first</h2>
          <p>
            Start with the service that matches your property, your schedule, or
            the type of cleaning result you need most.
          </p>
        </div>

        <div className="link-grid">
          {homePage.popularServices.map((service) => (
            <Link className="link-card" href={service.href} key={service.href}>
              <p className="stack-label">Popular service</p>
              <h3>{service.label}</h3>
              <span>View service details</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--cream">
        <div className="section-heading">
          <p className="eyebrow">Property types</p>
          <h2>Cleaning for homes, rentals, and busy workplaces</h2>
          <p>
            We work across households, managed properties, commercial sites, and
            specialised environments that need a tailored service plan.
          </p>
        </div>

        <div className="info-grid industries-grid">
          {homePage.industries.map((item, index) => (
            <article className="info-card industry-card" key={item}>
              <span className="industry-card__icon" aria-hidden="true">
                <IndustryIcon
                  icon={industryIcons[index % industryIcons.length]}
                />
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--mint">
        <div className="section-shell__split">
          <div className="section-shell__content">
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Service areas</p>
              <h2>{homePage.serviceAreas.title}</h2>
              <p>{homePage.serviceAreas.body}</p>
            </div>

            <div className="mini-chip-grid">
              {locationsPage.cities.map((city) => (
                <span className="mini-chip" key={city}>
                  {city}
                </span>
              ))}
            </div>

            <div className="hero-copy__actions">
              <Link className="button button--primary" href="/locations">
                {homePage.serviceAreas.cta}
              </Link>
              <Link className="button button--ghost" href="/contact">
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="section-shell__visual">
            <article className="content-card content-card--media">
              <Image
                src="/serviceAreasImage.png"
                alt="Australia service area illustration"
                width={1536}
                height={1024}
              />
            </article>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>What our clients say</h2>
          <p>
            We are trusted by households, hosts, and businesses that need
            reliable cleaning, clearer communication, and practical service
            support.
          </p>
        </div>

        <div className="testimonials-grid">
          {homePage.testimonials.map((item) => (
            <article className="testimonial-card" key={item.source}>
              <p>&quot;{item.quote}&quot;</p>
              <span>{item.source}</span>
            </article>
          ))}
        </div>

        <div className="hero-copy__actions">
          <Link className="button button--ghost" href="/contact">
            Talk to Our Team
          </Link>
        </div>
      </section>

      <section className="section section-shell section-shell--sky">
        <div className="section-heading">
          <p className="eyebrow">FAQs</p>
          <h2>Questions clients often ask before booking</h2>
          <p>
            If you are comparing services, wondering what is included, or trying
            to plan around access and timing, these are the questions we hear
            most.
          </p>
        </div>
        <FaqGrid items={homePage.faqs} />
      </section>

      <section className="section quote-section" id="quote">
        <div className="quote-section__intro">
          <p className="eyebrow">Lead capture</p>
          <h2>Need reliable cleaning without the back-and-forth?</h2>
          <p>
            Tell us what you need and we will send a tailored quote for one-off,
            recurring, residential, commercial, or specialised cleaning.
          </p>
          <div className="quote-section__contact">
            <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </div>
        </div>

        <div className="quote-section__card">
          <QuoteForm compact />
        </div>
      </section>

      <section className="section">
        <CtaBand
          eyebrow="Final step"
          title={homePage.finalCta.title}
          body={homePage.finalCta.body}
          primaryHref="/contact"
          primaryLabel={homePage.finalCta.primary}
          secondaryHref={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
          secondaryLabel={homePage.finalCta.secondary}
        />
      </section>
    </main>
  );
}
