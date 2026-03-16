type FaqGridProps = {
  items: string[];
};

export function FaqGrid({ items }: FaqGridProps) {
  return (
    <div className="faq-grid">
      {items.map((item) => (
        <article className="faq-card" key={item}>
          <h3>{item}</h3>
          <p>
            The answer depends on the property, service type, and schedule. When you
            send an enquiry, we will confirm the scope, inclusions, and best-fit
            timing for your clean.
          </p>
        </article>
      ))}
    </div>
  );
}
