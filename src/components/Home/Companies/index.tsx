"use client";
import Image from "next/image";
import React from "react";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Companies = () => {
  return (
    <section className="text-center">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <h2 className="text-midnight_text text-2xl font-semibold">
          Trusted by all companies
        </h2>
        <div className="py-14 border-b">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {TruestedCompanies.map((item, i) => (
              <div key={i} className="flex justify-center items-center">
                <Image
                  src={`${getImagePrefix()}${item.imgSrc}`}
                  alt={item.imgSrc}
                  width={116}
                  height={36}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;