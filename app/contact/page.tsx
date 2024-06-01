import Navbar from "@/app/ui/Navbar";
import Contact from "@/app/ui/Contact";
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full">
        <Navbar onlyNav={true} />
      </div>
      <div className="-mt-36">
        <Contact />
      </div>
    </>
  );
}
