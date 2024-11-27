import Link from "next/link";
import React from "react";
import Image from "next/image";

export interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles: string;
  imgStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  imgStyles,
  isAuthor,
}: Props) => {
  const metricsContent = (
    <>
      <Image
        src={imgUrl}
        height={16}
        width={16}
        alt={alt}
        className={`rounded-full object-contain ${imgStyles}`}
      ></Image>

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricsContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricsContent}</div>
  );
};

export default Metric;
