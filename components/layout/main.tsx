import { LayoutProps } from "@/models";
import Link from "next/link";
import React, { useEffect } from "react";

export default function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("MainLayout mounting");
    return () => console.log("MainLayout unmounting");
  }, []);
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </div>
  );
}
