import { createFileRoute } from "@tanstack/react-router";

import { LandingHero } from "@/components/landing/landing-hero";

export const Home = () => (
  <main className="flex min-h-screen items-center justify-center px-6">
    <LandingHero />
  </main>
);

export const Route = createFileRoute("/")({
  component: Home,
});
