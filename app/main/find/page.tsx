"use client";

import Header from "../../components/header";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const secondaryColor = "#7B2300";

export default function Find() {
  const [x, setX] = React.useState(0.2);
  const [y, setY] = React.useState(0.2);
  const [z, setZ] = React.useState(0.2);
  const [k, setK] = React.useState(0.2);

  const [long, setLong] = React.useState(0);
  const [lat, setLat] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  const buildQueryURL = () => {
    const params = new URLSearchParams({
      x: String(x),
      y: String(y),
      z: String(z),
      k: String(k),
      long: String(long),
      lat: String(lat),
      price: String(price),
    });

    return `/main/results?${params.toString()}`;
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative pt-10 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug max-w-4xl mx-auto"
              style={{ color: "#7B2300", fontFamily: "Roboto, sans-serif" }}
            >
              Find Your House
            </h1>

            <h2
              className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold leading-snug max-w-3xl mx-auto"
              style={{ color: "#795F02", fontFamily: "Roboto, sans-serif" }}
            >
              Input your priorities, and Forvil will find the best house
              that fits your needs.
            </h2>
            <Image
              src="/formula.png"
              alt="formula"
              width={900}
              height={400}
              className="mt-8 mx-auto"
            />
          </div>

          <div className="flex flex-row justify-center mt-12 space-x-4 sm:space-x-8 items-end mx-20">
            <div className="w-full max-w-4xl mx-auto">
              <h3
              className="text-center text-2xl font-bold mb-6"
              style={{ color: "#7B2300" }}
            >
              Your Desired Weights
            </h3>
          {[
            { label: "X: Weights for Natural Disaster", value: x, set: setX },
            { label: "Y: Weights for Distance", value: y, set: setY },
            { label: "Z: Weights for Price", value: z, set: setZ },
            { label: "K: Weights for Crime Rate", value: k, set: setK },
          ].map((item, index) => (
            <div key={index} className="w-full max-w-4xl mx-auto mt-14 px-6">
              <h3
                className="text-center text-lg font-semibold mb-2"
                style={{ color: "#7B2300" }}
              >
                {item.label}
              </h3>

              <input
                type="range"
                min={0}
                max={1}
                step={0.2}
                value={item.value}
                onChange={(e) => item.set(Number(e.target.value))}
                className="forvil-slider w-full"
              />

              <div className="flex justify-between text-xs mt-2 px-1">
                <span>0</span>
                <span>0.2</span>
                <span>0.4</span>
                <span>0.6</span>
                <span>0.8</span>
                <span>1</span>
              </div>
            </div>
          ))}
          </div>

          {/* User Inputs */}
          <div className="w-full max-w-4xl mx-auto px-6">
            <h3
              className="text-center text-2xl font-semibold mb-8"
              style={{ color: "#7B2300" }}
            >
              Your Desired Nearby Location
            </h3>

            {/* Longitude */}
            <div className="mb-10">
              <label className="block text-sm font-bold mb-2" style={{ color: "#7B2300" }}>
                Longitude
              </label>
              <input
                type="number"
                value={long}
                onChange={(e) => setLong(Number(e.target.value))}
                className="w-full px-4 py-6 border rounded-lg shadow-sm focus:outline-none"
                style={{
                  borderColor: "#7B2300",
                  backgroundColor: "#FFF9E6",
                }}
                placeholder="Enter longitude"
              />
            </div>

            {/* Latitude */}
            <div className="mb-10">
              <label className="block text-sm font-bold mb-2" style={{ color: "#7B2300" }}>
                Latitude
              </label>
              <input
                type="number"
                value={lat}
                onChange={(e) => setLat(Number(e.target.value))}
                className="w-full px-4 py-6 border rounded-lg shadow-sm focus:outline-none"
                style={{
                  borderColor: "#7B2300",
                  backgroundColor: "#FFF9E6",
                }}
                placeholder="Enter latitude"
              />
            </div>

            <h3
              className="text-center text-2xl font-bold mb-5"
              style={{ color: "#7B2300" }}
            >
              Your Desired Price Range
            </h3>

            {/* Price */}
            <div className="mb-10">
              <label className="block text-sm font-bold mb-2" style={{ color: "#7B2300" }}>
                Maximum Price (IDR)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-4 py-6 border rounded-lg shadow-sm focus:outline-none"
                style={{
                  borderColor: "#7B2300",
                  backgroundColor: "#FFF9E6",
                }}
                placeholder="Enter maximum budget"
              />
            </div>
         

          {/* Submit button */}
          <div className="text-center mt-12">
            <Link
              href={buildQueryURL()}
              className="w-full px-4 py-6 rounded-md text-white font-bold shadow-lg"
              style={{
                backgroundColor: secondaryColor,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Submit Weights and Input
            </Link>
          </div>
          </div>
           </div>
        </section>
      </main>
    </>
  );
}
