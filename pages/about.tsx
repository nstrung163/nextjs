// import Header from "@/components/common/header";
import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});
export default function about() {
  return (
    <div>
      <h1>About</h1>
      <Header />
    </div>
  );
}
