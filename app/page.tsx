"use client";

import Image from "next/image";
import Header from "@/components/header/header";
import HomeBanner from "@/components/home/home";
import Arrivals from "@/components/newArrivals/arrivals";


export default function Home() {

  return (
      <body>
        <main>
          <div className="wide-wrap">
            <Header />
          </div>
          <HomeBanner />
          <Arrivals />
        </main>
      </body>
  );
}
