"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";

export function SiteHeader({ links }: { links: InternalLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(siteConfig.assets.logo)} alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-border" width="36" height="36" />
          <span className="truncate text-base font-black tracking-tight text-foreground sm:text-lg">
            {siteConfig.shortName}
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-border p-2 text-foreground lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          aria-label="Primary navigation"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-1 border-b border-border bg-background p-4 shadow-theme lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:rounded-full lg:border lg:border-border/80 lg:bg-card/80 lg:p-1.5 lg:shadow-theme`}
        >
          {links.map((link) => (
            <Link
              key={link.slug}
              href={routePath(link.slug)}
              className="rounded-xl px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground lg:rounded-full lg:px-4"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
