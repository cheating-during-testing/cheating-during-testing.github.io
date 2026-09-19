"use client";

import { useEffect, useRef, useState } from "react";

const BREAKPOINT = 768;

const bannerUnits = {
  desktop: {
    key: "9830e268685a61ce85abd38094b10042",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
    scriptUrl: "https://www.highrevenueformat.com/9830e268685a61ce85abd38094b10042/invoke.js",
  },
  mobile: {
    key: "2347413967fefc9cac873dd2953db81e",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
    scriptUrl: "https://www.highrevenueformat.com/2347413967fefc9cac873dd2953db81e/invoke.js",
  },
} as const;

type BannerUnit = typeof bannerUnits.desktop | typeof bannerUnits.mobile;

declare global {
  interface Window {
    atOptions?: Omit<BannerUnit, "scriptUrl">;
  }
}

export function ResponsiveBannerAd() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [unit, setUnit] = useState<BannerUnit | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
    const updateUnit = () => setUnit(mediaQuery.matches ? bannerUnits.desktop : bannerUnits.mobile);

    updateUnit();
    mediaQuery.addEventListener("change", updateUnit);
    return () => mediaQuery.removeEventListener("change", updateUnit);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !unit) return;

    host.replaceChildren();
    delete host.dataset.bannerUnavailable;
    window.atOptions = {
      key: unit.key,
      format: unit.format,
      height: unit.height,
      width: unit.width,
      params: unit.params,
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = unit.scriptUrl;
    script.dataset.cfasync = "false";
    script.dataset.gameWikiBannerAd = unit.key;
    script.onerror = () => {
      host.replaceChildren();
      host.dataset.bannerUnavailable = "true";
    };
    host.appendChild(script);

    return () => {
      host.replaceChildren();
    };
  }, [unit]);

  return (
    <section className="responsive-banner-ad" aria-label="Advertisement">
      <p className="responsive-banner-ad__label">Advertisement</p>
      <div ref={hostRef} className="responsive-banner-ad__slot" data-responsive-banner-ad />
    </section>
  );
}
