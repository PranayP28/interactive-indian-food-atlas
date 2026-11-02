import React, { useMemo, useState } from "react";
import { Camera, ExternalLink, UtensilsCrossed } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { photoSources, photoSrcSet, type Photograph } from "../../data/photography";

type UnavailableCopy = {
  title?: string;
  body?: string;
  searchUrl?: string;
};

interface PhotoFrameProps {
  photo: Photograph | null;
  /** Tailwind aspect class, e.g. "aspect-[4/5]". */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Show the dark scrim + caption over the photograph. */
  overlay?: boolean;
  caption?: string;
  badge?: string;
  children?: React.ReactNode;
  unavailable?: UnavailableCopy;
}

/**
 * A single photograph, presented the way a magazine or a restaurant menu would
 * present it: consistent crop, warm grade, film grain, a caption that names the
 * photographer and the licence. If there is no verified photograph we say so
 * plainly — we never fill the frame with something else.
 */
export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  photo,
  ratio = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  overlay = true,
  caption,
  badge,
  children,
  unavailable,
}) => {
  const { isLight } = useTheme();
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Self-hosted copy first, then the CDN, then the original file, then the
  // legacy local copy — every entry is a verified photograph.
  const sources = useMemo(() => (photo ? photoSources(photo, 1280) : []), [photo]);

  const srcSet = useMemo(() => (photo ? photoSrcSet(photo) : ""), [photo]);
  const exhausted = !photo || attempt >= sources.length;

  if (exhausted) {
    return (
      <div
        className={`relative ${ratio} w-full overflow-hidden rounded-[1.75rem] border border-dashed ${
          isLight ? "border-amber-900/25 bg-amber-50/60" : "border-amber-500/20 bg-slate-950/60"
        } ${className}`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full border ${
              isLight ? "border-amber-900/20 bg-white text-amber-800" : "border-amber-500/25 bg-black/30 text-amber-300"
            }`}
          >
            <Camera className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <p className={`font-cormorant text-lg italic ${isLight ? "text-amber-950" : "text-amber-100"}`}>
            {unavailable?.title ?? "No verified photograph"}
          </p>
          <p className={`max-w-xs text-[11px] leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
            {unavailable?.body ??
              "We could not source a photograph that is both unmistakably this dish and free to reuse. Rather than show something else, this frame stays empty."}
          </p>
          {unavailable?.searchUrl && (
            <a
              href={unavailable.searchUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={`pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] underline decoration-dotted underline-offset-4 ${
                isLight ? "text-amber-800 hover:text-amber-950" : "text-amber-300 hover:text-amber-200"
              }`}
            >
              Search Commons
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <figure
      className={`group relative ${ratio} w-full overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_-45px_rgba(0,0,0,0.85)] ring-1 ${
        isLight ? "bg-amber-100 ring-amber-900/10" : "bg-slate-900 ring-white/10"
      } ${className}`}
    >
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse ${
            isLight ? "bg-gradient-to-br from-amber-100 to-amber-200" : "bg-gradient-to-br from-slate-800 to-slate-900"
          }`}
        />
      )}
      <img
        src={sources[attempt]}
        srcSet={attempt === 0 && !photo!.local ? srcSet : undefined}
        sizes={sizes}
        alt={photo!.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setAttempt((a) => a + 1)}
        className={`photo-grade h-full w-full object-cover transition-[transform,opacity] duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.035] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Photographic grade: warm scrim, vignette and grain */}
      <div className="pointer-events-none absolute inset-0 bg-radial-vignette opacity-60" aria-hidden />
      {overlay && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden
        />
      )}
      <div className="film-grain pointer-events-none absolute inset-0" aria-hidden />

      {badge && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/45 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-amber-50 backdrop-blur-md">
          {badge === "dish" || badge === "Finished dish" ? <UtensilsCrossed className="h-3 w-3" /> : <Camera className="h-3 w-3" />}
          {badge === "dish" ? "Dish photograph" : badge === "context" ? "Documentary photograph" : badge}
        </span>
      )}

      {children}

      {(caption || photo) && (
        <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
          {caption && (
            <p className="font-cormorant text-[15px] leading-snug text-amber-50 drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]">
              {caption}
            </p>
          )}
          <a
            href={photo!.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-medium uppercase tracking-[0.14em] text-amber-200/80 hover:text-amber-100"
          >
            <span>
              Photo: {photo!.creator} · {photo!.licence}
            </span>
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </figcaption>
      )}
    </figure>
  );
};

export default PhotoFrame;
