import { LayoutProps } from "@/models";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { Footer, Header } from "../common";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        <h1>Main Layout</h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/works">Work</Link>
        <div>{children}</div>
      </Box>
      <Footer />
    </Stack>
  );
}
