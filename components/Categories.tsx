import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Men",
    description: "Streetwear, essentials & everyday fits",
    href: "/men",
    code: "M / 001",
  },
  {
    number: "02",
    name: "Women",
    description: "Modern silhouettes & statement pieces",
    href: "/women",
    code: "W / 002",
  },
  {
    number: "03",
    name: "Footwear",
    description: "Clean sneakers & everyday essentials",
    href: "/search?category=Footwear",
    code: "F / 003",
  },
  {
    number: "04",
    name: "Accessories",
    description: "The details that complete the fit",
    href: "/search?category=Accessories",
    code: "A / 004",
  },
];

export default function Categories() {
  return (
    <section className="luxury-wave-bg relative overflow-hidden bg-[#090909] px-6 py-24 text-[#e8e5df] sm:px-10 sm:py-32 lg:px-16 lg:py-36">
      {/* Subtle atmospheric texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 85% 45%, rgba(180,180,180,0.07), transparent 35%),
            radial-gradient(ellipse at 10% 80%, rgba(255,255,255,0.025), transparent 40%),
            repeating-radial-gradient(ellipse at 85% 55%, transparent 0px, transparent 22px, rgba(255,255,255,0.012) 23px, transparent 25px, transparent 42px)
          `,
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="grid gap-8 border-b border-white/20 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-8 bg-white/50" />

              <p className="text-[9px] uppercase tracking-[0.38em] text-white/50 sm:text-[10px]">
                FashionStreet / The Collections
              </p>
            </div>

            <h2 className="font-serif text-5xl font-normal leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
              FIND YOUR
              <br />
              <span className="italic text-[#99958d]">IDENTITY.</span>
            </h2>
          </div>

          <div className="max-w-xs md:pb-2">
            <p className="text-xs leading-7 tracking-wide text-white/50 sm:text-sm">
              Different expressions. One point of view. Explore collections
              built around individuality, intention, and everyday style.
            </p>

            <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/35">
              Four categories / Endless possibilities
            </p>
          </div>
        </div>

        {/* Category list */}
        <div className="mt-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative grid grid-cols-[38px_1fr_30px] items-center gap-4 border-b border-white/10 py-7 transition-colors duration-500 hover:border-white/35 sm:grid-cols-[60px_1fr_auto_40px] sm:gap-6 sm:py-9 lg:py-10"
            >
              <span className="text-[9px] tracking-[0.2em] text-white/35 transition-colors duration-300 group-hover:text-white/80 sm:text-[10px]">
                {category.number}
              </span>

              <div>
                <h3 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[#e8e5df] transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {category.name}
                </h3>

                <p className="mt-2 text-[9px] leading-5 tracking-wide text-white/40 transition-colors duration-300 group-hover:text-white/65 sm:text-xs sm:tracking-wider">
                  {category.description}
                </p>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/25 transition-colors group-hover:text-white/60 sm:block">
                {category.code}
              </span>

              <span className="flex h-8 w-8 items-center justify-center border border-white/15 text-sm text-white/50 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-10 sm:w-10">
                ↗
              </span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">
            Designed for those who define their own style.
          </p>

          <p className="font-serif text-sm italic text-white/45">
            FashionStreet — Est. 2026
          </p>
        </div>
      </div>
    </section>
  );
}