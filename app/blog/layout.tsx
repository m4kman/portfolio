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
      <ReactLenis root>
        <div className="mx-auto flex max-w-2xl flex-col place-items-center">
          {children}
        </div>
      </ReactLenis>
    </>
  );
}

export default RootLayout;
