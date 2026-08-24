export default function Button({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1.5 text-[7px] font-medium text-black transition hover:bg-white/80 sm:px-4 sm:py-2 sm:text-[9px] md:px-5 md:text-[10px] ${className}`}>
      {children}
    </a>
  );
}
