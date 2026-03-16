import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CtaBandProps) {
  const isPrimaryExternal = primaryHref.startsWith("tel:") || primaryHref.startsWith("mailto:");
  const isSecondaryExternal =
    secondaryHref ? secondaryHref.startsWith("tel:") || secondaryHref.startsWith("mailto:") : false;

  return (
    <section className="cta-band">
      <div className="cta-band__copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="hero-copy__actions">
        {isPrimaryExternal ? (
          <a className="button button--primary" href={primaryHref}>
            {primaryLabel}
          </a>
        ) : (
          <Link className="button button--primary" href={primaryHref}>
            {primaryLabel}
          </Link>
        )}
        {secondaryHref && secondaryLabel ? (
          isSecondaryExternal ? (
            <a className="button button--ghost" href={secondaryHref}>
              {secondaryLabel}
            </a>
          ) : (
            <Link className="button button--ghost" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          )
        ) : null}
      </div>
    </section>
  );
}
