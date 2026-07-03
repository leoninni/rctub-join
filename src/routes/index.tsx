import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/site/NavBar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Apply } from "@/components/site/Apply";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Apply />
      </main>
    </div>
  );
}
