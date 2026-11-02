import React from "react";
import { Camera } from "lucide-react";
import { getDishPhotography, photoSrcSet, photoUrlWithin } from "../../data/photography";

interface DishThumbProps {
  dishId: string;
  className?: string;
  ratio?: string;
  /** Render a placeholder instead of nothing when there is no verified photo. */
  showEmptyState?: boolean;
}

/**
 * Compact dish photograph for cards and lists. Renders nothing when a dish has
 * no verified photograph, so a missing image never becomes a fake one.
 */
export const DishThumb: React.FC<DishThumbProps> = ({
  dishId,
  className = "",
  ratio = "aspect-[16/9]",
  showEmptyState = false,
}) => {
  const photography = getDishPhotography(dishId);
  const photo = photography?.plated ?? null;

  if (!photo) {
    if (!showEmptyState) return null;
    return (
      <div
        className={`${ratio} flex w-full items-center justify-center rounded-xl border border-dashed border-amber-900/20 bg-amber-50/40 text-[10px] uppercase tracking-[0.18em] text-amber-900/50 ${className}`}
      >
        <Camera className="mr-1.5 h-3 w-3" /> photograph unavailable
      </div>
    );
  }

  return (
    <div className={`group/thumb relative ${ratio} w-full overflow-hidden rounded-xl ${className}`}>
      <img
        src={photoUrlWithin(photo.src, 500, photo.width)}
        srcSet={photoSrcSet(photo, [330, 500, 960])}
        sizes="(max-width: 768px) 100vw, 380px"
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="photo-grade h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover/thumb:scale-[1.05]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="film-grain pointer-events-none absolute inset-0" />
      <span className="absolute bottom-1.5 right-2 text-[8px] font-medium uppercase tracking-[0.12em] text-amber-100/70">
        {photo.creator}
      </span>
    </div>
  );
};

export default DishThumb;
