import Image from "next/image";
import React from "react";

export function PrimaryLogo() {
  return (
    <Image
      src={"/assets/Logo/Logo.png"}
      alt="logo"
      width={129}
      height={54}
      draggable={false}
    />
  );
}

export function SecondaryLogo() {
  return (
    <Image
      src={"/assets/Logo/Logo.png"}
      alt="logo"
      width={86}
      height={36}
      draggable={false}
    />
  );
}

export function Logo() {
  return (
    <Image
      src={"/assets/Logo/Logo1.png"}
      alt="logo"
      width={400} height={400}
      draggable={false}
    />
  );
}
