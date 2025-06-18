"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import PropTypes from "prop-types";

export function ThreeDCard({
  title,
  description,
  imageSrc,
  imageAlt,
  link = "#",
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border bg-opacity-50">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-100 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-100 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-4 flex justify-center items-center"
        >
          <Image
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-40 w-80 object-cover rounded-xl group-hover/card:shadow-xl"
            alt={imageAlt}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-10">
          <CardItem translateZ={20}>
          <Link
  href={link}
  target="_blank"
  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Go to {title}
  </span>
</Link>

          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Prop validation
ThreeDCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  link: PropTypes.string,
};
