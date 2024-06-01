import { Metadata } from "next";
import { ReactLenis } from "@/app/lib/lenis";
import Navbar from "@/app/ui/Navbar";

export const metadata: Metadata = {
  title: "Hassam's Blog",
  description: "Read my blogs on tech, and experiences",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="mx-auto w-full">
        <Navbar onlyNav={true} />
      </div>
      <ReactLenis root>{children}</ReactLenis>
    </>
  );
}

export default RootLayout;
