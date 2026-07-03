const FORM_URL = "#PLACEHOLDER_FORM_URL";

export function Apply() {
  return (
    <section id="apply" className="py-20 md:py-28">
      <div className="container-page">
        <div className="rounded-[2rem] border border-border bg-surface p-12 md:p-20 flex flex-col items-start gap-8 md:items-center md:text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            02 /
          </div>
          <h2 className="display-text max-w-xl text-4xl md:text-6xl">
            Ready to build something real?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Applications are open to all students in Berlin — no experience required.
          </p>
          <a
            href={FORM_URL}
            className="pill bg-accent text-accent-foreground border-accent hover:bg-accent/90 px-8 py-4 text-base"
          >
            Apply to join →
          </a>
          <span className="text-sm text-muted-foreground">
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
