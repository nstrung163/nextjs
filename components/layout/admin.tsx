import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";
import Auth from "../common/auth";
import { useAuth } from "@/hooks";

export default function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      console.log("Logout successfully redirect to login page");
    } catch (error) {
      console.log("Logout failed due to", error);
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <p>Profile: {JSON.stringify(profile)}</p>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Link href="/sidebar">Sidebar</Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      {children}
    </Auth>
  );
}
