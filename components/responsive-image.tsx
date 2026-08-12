import type { CSSProperties } from "react";
import imageManifest from "@/config/images.json";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
};

const standardWidths = [480, 768, 1200, 1600];

function imageDetails(src: string) {
  const details = (imageManifest as Record<string, { width: number; height: number }>)[src];
  if (!details) throw new Error(`Missing responsive image configuration: ${src}`);
  return details;
}

function candidateWidths(sourceWidth: number) {
  const widths = standardWidths.filter((width) => width < sourceWidth);
  widths.push(sourceWidth);
  return widths;
}

function optimizedUrl(src: string, width: number, format: "avif" | "webp") {
  const filename = src.split("/").pop()?.replace(/\.[^.]+$/, "");
  return `/optimized/${filename}-${width}.${format}`;
}

export function ResponsiveImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  style,
}: ResponsiveImageProps) {
  const details = imageDetails(src);
  const widths = candidateWidths(details.width);
  const sourceSet = (format: "avif" | "webp") =>
    widths.map((width) => `${optimizedUrl(src, width, format)} ${width}w`).join(", ");

  return (
    <picture className="responsive-picture">
      <source type="image/avif" srcSet={sourceSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={sourceSet("webp")} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={details.width}
        height={details.height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...style,
        }}
      />
    </picture>
  );
}
