"use client";
import React from "react";
import Black from "../_components/blackpopup";
import White from "../_components/whitepopup";
import Gold from "../_components/goldpopup";


export default function Home() {
  return (
    <main className="p-10 flex gap-4">
      <Black />
      <White />
      <Gold />
    </main>
  );
}