import { SectionHeader } from "./SectionHeader";

const FORM_URL = "#PLACEHOLDER_FORM_URL";

export function Apply() {
  return (
    <section
      id="apply"
      className="border-t border-border bg-surface/40 py-28 md:py-40"
    >
      <div className="container-page">
        <SectionHeader
          num="02"
          kicker="Join us"
          title="Ready to build something real?"
        />

        <p className="mb-12 max-w-xl text-lg text-muted-foreground">
          Applications are open to all students in Berlin — no experience
          required, just curiosity and drive. Fill out the form and we'll be in
          touch.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={FORM_URL}
            className="pill bg-accent text-accent-foreground border-accent hover:bg-accent/90 text-sm"
          >
            Apply now →
          </a>
          <span className="text-sm text-muted-foreground">
            or reach us at{" "}
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
