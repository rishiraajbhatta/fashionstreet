import Link from "next/link";
import ObsidianFlow from "@/components/ObsidianFlow";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#070707] px-6 py-24 text-[#e8e5df] sm:min-h-[750px] sm:px-10 lg:min-h-[850px] lg:px-16">
      {/* Animated procedural liquid-metal background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <ObsidianFlow />
      </div>

      {/* Cinematic dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,5,0.38) 0%, rgba(5,5,5,0.08) 55%, rgba(5,5,5,0.22) 100%), linear-gradient(0deg, rgba(5,5,5,0.42), transparent 45%, rgba(5,5,5,0.12))",
        }}
      />

      {/* Left editorial line */}
      <div className="pointer-events-none absolute bottom-12 left-6 top-12 hidden w-px bg-white/15 sm:left-10 sm:block lg:left-16" />

      {/* Hero content */}
      <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-16 md:grid-cols-[1.3fr_0.7fr] lg:gap-20">
        {/* Main text */}
        <div className="relative z-10">
          <div className="mb-12 flex items-center gap-4">
            <span className="h-px w-8 bg-white/50" />

            <p className="text-[9px] uppercase tracking-[0.38em] text-white/60 sm:text-[10px]">
              FashionStreet / New Season 2026
            </p>
          </div>

          <h1 className="font-serif text-6xl font-normal leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-7xl lg:text-[100px] xl:text-[120px]">
            MORE THAN
            <br />
            CLOTHES<span className="text-[#aaa69e]">.</span>
          </h1>

          <p className="mt-8 text-[10px] uppercase tracking-[0.42em] text-white/65 sm:text-xs">
            It&apos;s a mindset.
          </p>

          <p className="mt-8 max-w-md text-xs leading-7 tracking-wide text-white/55 sm:text-sm sm:leading-8">
            Elevated essentials, modern silhouettes and timeless pieces for a
            new generation.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/new-arrivals"
              className="group inline-flex items-center gap-5 border border-white/35 bg-white/[0.03] px-6 py-4 text-[9px] uppercase tracking-[0.25em] backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-black sm:px-8"
            >
              Explore Collections

              <span className="text-base transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/men"
              className="border-b border-white/30 pb-2 text-[9px] uppercase tracking-[0.25em] text-white/70 transition-colors duration-300 hover:border-white hover:text-white"
            >
              Discover the Edit
            </Link>
          </div>
        </div>

        {/* Minimal brand emblem */}
        <div className="relative hidden min-h-[350px] items-center justify-center md:flex lg:min-h-[450px]">
          {/* Outer emblem */}
          <div className="absolute h-[280px] w-[280px] rounded-full border border-white/[0.08] lg:h-[360px] lg:w-[360px]" />

          {/* Middle emblem */}
          <div className="absolute h-[220px] w-[220px] rounded-full border border-white/[0.10] lg:h-[290px] lg:w-[290px]" />

          {/* Inner emblem */}
          <div className="absolute h-[160px] w-[160px] rounded-full border border-white/[0.12] lg:h-[220px] lg:w-[220px]" />

          <div className="relative text-center">
            <p className="font-serif text-6xl tracking-[-0.08em] text-[#d8d4cd] lg:text-8xl">
              FS
            </p>

            <div className="mx-auto my-6 h-8 w-px bg-white/35" />

            <p className="text-[8px] uppercase tracking-[0.4em] text-white/65">
              FashionStreet
            </p>

            <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-white/40">
              Est. 2026
            </p>
          </div>

          {/* Collection number */}
          <div className="absolute right-0 top-12 text-right">
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
              01 / 03
            </p>
          </div>

          {/* Brand location */}
          <div className="absolute bottom-4 right-0 flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />

            <p className="text-[8px] uppercase tracking-[0.25em] text-white/50">
              Bengaluru / India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom-left editorial label */}
      <div className="pointer-events-none absolute bottom-10 left-6 hidden sm:block sm:left-10 lg:left-16">
        <p className="rotate-180 text-[8px] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]">
          FashionStreet / Est. 2026
        </p>
      </div>

      {/* Bottom-right collection marker */}
      <div className="pointer-events-none absolute bottom-10 right-6 hidden sm:block sm:right-10 lg:right-16">
        <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
          Designed to stand apart
        </p>
      </div>
    </section>
  );
}