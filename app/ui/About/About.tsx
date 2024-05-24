"use client";
import { LayoutGroup } from "framer-motion";
import AboutCards from "@/app/ui/AboutCards";
import { Button } from "@/app/ui/button";

function About() {
  return (
    <LayoutGroup>
      <div>
        <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
          <h1 className="text-center text-5xl font-semibold uppercase">
            About
          </h1>
          <span className="self-end text-sm font-medium text-accent">
            a lil something about me
          </span>
        </div>
        <div className="relative flex h-[500px] justify-center">
          <AboutCards />
          <div className="pointer-events-none absolute bottom-20 right-[25%]">
            <div className="flex items-center gap-6">
              <svg
                width="40"
                height="100"
                viewBox="0 0 71 173"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7988 0.768714C23.4502 0.768714 26.9916 0.0599658 28.0004 1.68132C29.3625 3.87064 26.7368 4.73428 25.0566 5.30063C21.7528 6.41434 16.244 5.8967 13.5532 7.92452C36.8675 21.2272 54.3079 41.6296 63.2792 66.9658C72.2023 92.1659 73.9298 123.041 59.646 146.774C52.6548 158.391 42.5371 168.036 29.112 171.674C27.9601 171.986 22.337 173.792 22.5665 171.372C22.6861 170.11 29.9285 167.861 31.1587 167.258C37.5543 164.125 43.0416 160.059 47.7932 154.779C63.9838 136.786 67.2492 110.064 62.9615 87.1733C60.1211 72.0095 53.8112 57.1492 45.0352 44.3793C40.5054 37.7878 35.2466 31.4908 29.2278 26.1847C24.1512 21.7092 15.9742 14.1517 9.11109 12.7926C10.0174 18.8063 16.8418 24.1421 18.6355 30.0109C19.586 33.1199 18.0614 36.6809 14.531 34.5207C11.6689 32.7694 9.85902 27.1195 8.32365 24.2571C6.61042 21.0631 5.01065 17.8316 3.60433 14.4919C2.57275 12.042 -0.662527 7.21602 0.386546 4.60949C2.24154 0.000508092 17.5656 0.905492 21.7988 0.768714C20.0326 0.825799 23.5253 0.768714 21.7988 0.768714Z"
                  fill="#A3A3A3"
                />
              </svg>
              <span
                className="pointer-events-none select-none font-dancing text-2xl font-semibold
                  text-[#a3a3a3]"
              >
                hey, drag me
              </span>
            </div>
          </div>
        </div>
        <Button className="mx-auto mt-20 block">Reveal All</Button>
      </div>
    </LayoutGroup>
  );
}

export default About;
