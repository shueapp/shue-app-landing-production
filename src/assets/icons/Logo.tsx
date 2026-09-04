"use client";
import Image from "next/image";
import shueLogo from "../img/logo.png";
import shueLogoLight from "../img/logo-light.png";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const ShueLogo = ({ className, size }: LogoProps) => (
  <span className={cn("justify-center items-center", className)}>
    <Image
      src={shueLogo}
      alt="ShueApp logo"
      className={cn("w-auto", {
        "h-7": size === "sm",
        "h-12": size === "md",
        "h-16": size === "lg",
      })}
      priority
    />
  </span>
);

export const ShueLogoLight = ({ className, size }: LogoProps) => (
  <span className={cn("justify-center items-center", className)}>
    <Image
      src={shueLogoLight}
      alt="ShueApp logo"
      className={cn("w-auto", {
        "h-7": size === "sm",
        "h-12": size === "md",
        "h-16": size === "lg",
      })}
      priority
    />
  </span>
);
