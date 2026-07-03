import { useEffect, useState } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <div className="flex items-center rounded-full border border-border bg-background/70 px-4 py-1.5 backdrop-blur-md">
          <a href="#top" className="display-text text-sm tracking-tight">
            <span className="text-foreground">rc</span>
            <span className="text-accent">tub</span>
          </a>
        </div>
        <a
          href="#apply"
          className="pill bg-accent text-accent-foreground border-accent hover:bg-accent/90 text-xs backdrop-blur-md"
        >
          Apply now →
        </a>
      </div>
    </header>
  );
}
