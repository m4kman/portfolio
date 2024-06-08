import type { Metadata } from "next";
import Contact from "@/app/ui/Contact";
import PageWrapper from "@/app/ui/PageWrapper";

export const metadata: Metadata = {
  title: "Contact Hassam",
  description:
    "Contact Hassam for any queries, collaborations, or just to say hi!",
};

export default function Home() {
  return (
    <PageWrapper y={50}>
      <div className="-mt-52">
        <Contact />
      </div>
    </PageWrapper>
  );
}
