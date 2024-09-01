import { titleFont } from "@/config/fonts";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className} md:px-10`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}
      >
        {title}
      </h1>
      {subtitle && <h3 className="text-xl mb-10">{subtitle}</h3>}
    </div>
  );
};
