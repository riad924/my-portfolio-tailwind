function Card({ children, className = "" }) {
  return (
    <article
      className={`rounded-2xl border bg-white px-8 py-10 shadow-sm transition duration-300 hover:shadow-xl ${className}`}
    >
      {children}
    </article>
  );
}

export default Card; 