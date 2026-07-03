import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    num: "01",
    title: "Educate",
    body: "Weekly workshops and peer-led sessions to grow your technical depth in robotics and related fields.",
  },
  {
    num: "02",
    title: "Innovate",
    body: "Work on real technical projects in teams, from concept to prototype.",
  },
  {
    num: "03",
    title: "Connect",
    body: "Hackathons, speaker events, and industry partnerships that bridge university and the real world.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container-page">
        <SectionHeader
          num="01"
          kicker="Who we are"
          title="A student association at TU Berlin built around robotics."
        />

        <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
          RCTUB brings together students from all disciplines who want to go
          beyond the classroom — building real systems, developing technical
          skills, and connecting with Berlin's engineering community.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.num}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 transition-colors hover:border-accent"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-accent">
                {p.num}
              </div>
              <h3 className="display-text mt-6 text-4xl">{p.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-12 h-px w-full bg-border transition-colors group-hover:bg-accent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
