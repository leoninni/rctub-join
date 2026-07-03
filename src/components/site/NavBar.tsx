import { useEffect, useState } from "react";
import { Logo } from "./Logo";

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
      <div className="container-page">
        <div className="inline-flex items-center rounded-full border border-border bg-background/70 px-4 py-2 backdrop-blur-md">
          <a href="#top">
            <Logo className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </header>
  );
}
