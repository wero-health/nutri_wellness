"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs sm:text-sm">
      <Link
        href="/"
        className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-medium"
      >
        <Home className="w-3.5 h-3.5" />
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-white/50" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#E8B77B] font-bold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
