export function SectionLabel({ children, className = "" }) {
  return (
    <span className={`section-kicker ${className}`}>
      {children}
    </span>
  );
}
