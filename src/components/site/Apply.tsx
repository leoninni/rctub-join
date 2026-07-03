const FORM_URL = "#PLACEHOLDER_FORM_URL";

export function Apply() {
  return (
    <section id="apply" className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-12 md:p-20 flex flex-col items-center text-center gap-8">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 110%, oklch(0.55 0.22 27 / 0.18) 0%, transparent 70%)",
            }}
          />
          <h2 className="display-text relative z-10 max-w-xl text-4xl md:text-6xl">
            Ready to build something real?
          </h2>
          <p className="relative z-10 max-w-md text-muted-foreground">
            Applications are open to all students in Berlin — no experience
            required.
          </p>
          <a
            href={FORM_URL}
            className="pill relative z-10 bg-accent text-accent-foreground border-accent hover:bg-accent/90 px-8 py-4 text-base"
          >
            Apply to join →
          </a>
          <span className="relative z-10 text-sm text-muted-foreground">
            or{" "}
            <a
              href="mailto:join@rctub.de"
              className="text-foreground hover:text-accent transition-colors"
            >
              join@rctub.de
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
