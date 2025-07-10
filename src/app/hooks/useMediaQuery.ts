"use client"
import { useEffect, useState } from "react";


export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure matchMedia is supported (SSR safety)
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const mediaQueryList: MediaQueryList = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    // Initial match
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
