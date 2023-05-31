import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";

export default function EmptyLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Empty Layout</h1>
      <Link href="/sidebar">Sidebar</Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      {children}
    </div>
  );
}
