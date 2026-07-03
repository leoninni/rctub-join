import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-page py-16">
        <Logo className="h-8 w-auto" />
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Robotics Club TU Berlin is a student association dedicated to enabling
          the next generation of robotics talent through education, hands-on
          projects, and collaboration with industry.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Robotics Club TU Berlin</div>
          <a
            href="mailto:info@rctub.de"
            className="hover:text-accent transition-colors"
          >
            info@rctub.de
          </a>
        </div>
      </div>
    </footer>
  );
}
