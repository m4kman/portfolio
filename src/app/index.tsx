import { createFileRoute } from "@tanstack/react-router";

const Home = () => (
  <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-white">
    A fresh start
  </div>
);

export const Route = createFileRoute("/")({
  component: Home,
});
