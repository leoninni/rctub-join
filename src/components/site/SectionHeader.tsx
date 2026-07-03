interface Props {
  num: string;
  kicker: string;
  title: string;
}

export function SectionHeader({ num, kicker, title }: Props) {
  return (
    <div className="mb-16">
      <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="inline-block h-1.5 w-1.5 rotate-45 bg-accent" />
        <span>{kicker}</span>
        <span className="ml-auto rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
          {num}
        </span>
      </div>
      <h2 className="display-text max-w-4xl text-4xl text-foreground md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
