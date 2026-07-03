const FORM_URL = "#PLACEHOLDER_FORM_URL";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page max-w-2xl">
        <p className="text-lg text-muted-foreground">
          RCTUB brings together students from all disciplines who want to go
          beyond the classroom — building real systems, developing technical
          skills, and connecting with Berlin's engineering community.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={FORM_URL}
            className="pill bg-accent text-accent-foreground border-accent hover:bg-accent/90"
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
