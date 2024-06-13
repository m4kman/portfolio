"use client";
import { useEffect, useCallback } from "react";

import { useRouter } from "next/navigation";

function CV() {
  const router = useRouter();

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const { key } = e;
    if (key === "b") {
      router.push("/resume.pdf");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => handleKeyPress(e));

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyPress(e));
    };
  }, []);
  return <></>;
}

export default CV;
