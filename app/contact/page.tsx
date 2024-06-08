import type { Metadata } from "next";
import Contact from "@/app/ui/Contact";

export const metadata: Metadata = {
  title: "Contact Hassam",
  description:
    "Contact Hassam for any queries, collaborations, or just to say hi!",
};

export default function Home() {
  return (
    <div className="-mt-52">
      <Contact />
    </div>
  );
}
