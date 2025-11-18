"use client";

import { useSearchParams } from "next/navigation";
import Header from "../../components/header";

export default function Results() {
  const params = useSearchParams();

  const x = params.get("x");
  const y = params.get("y");
  const z = params.get("z");
  const k = params.get("k");

  const long = params.get("long");
  const lat = params.get("lat");
  const price = params.get("price");

  return (
    <>
      <Header />

      <main className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: "#7B2300" }}>
          Results Based on Your Input
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto border"
          style={{ borderColor: "#7B2300" }}
        >
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#7B2300" }}>
            Your Weights
          </h2>
          <p>X (Natural Disaster): {x}</p>
          <p>Y (Distance): {y}</p>
          <p>Z (Price): {z}</p>
          <p>K (Crime Rate): {k}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "#7B2300" }}>
            Your Location & Budget
          </h2>
          <p>Longitude: {long}</p>
          <p>Latitude: {lat}</p>
          <p>Maximum Price: {price}</p>
        </div>
      </main>
    </>
  );
}
