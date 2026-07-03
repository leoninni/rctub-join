import heroImage from "@/assets/hero.jpg";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1088}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      <div className="container-page flex min-h-screen flex-col justify-center pt-32 pb-12">
        <div className="max-w-5xl pt-12 md:pt-24">
          <Logo className="mb-12 h-10 w-auto" />
          <h1 className="display-text tracking-tight text-5xl md:text-7xl lg:text-[9rem]">
            <span className="display-muted block">shape</span>
            <span className="block text-foreground">the future of</span>
            <span className="block text-accent">robotics</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
