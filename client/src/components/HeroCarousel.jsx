// HeroCarouselVisa.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Image tips:
 * - Replace /images/* with your real paths (or URLs/CDN).
 * - Use wide background images (16:9 or 21:9) for best look.
 */
const slides = [
    {
        heading: "Study Visa",
        sub: "Unlock global education opportunities with end-to-end guidance—course selection, SOP, IELTS coaching, and visa filing.",
        cta: { label: "Explore Study Visas", href: "/services/study-visa" },
        bg: "https://ik.imagekit.io/devhm/2150282803.jpg?updatedAt=1756234808484",
        image: "https://ik.imagekit.io/devhm/2150282803.jpg?updatedAt=1756234808484",
        bullets: ["Canada • USA • UK • Australia", "Fast offer letters", "Scholarship guidance"],
    },
    {
        heading: "Work Visa",
        sub: "Move your career abroad with compliant documentation, employer matching, and priority interview prep.",
        cta: { label: "Find Work Options", href: "/work-visa" },
        bg: "https://ik.imagekit.io/devhm/2371.jpg?updatedAt=1756234808559",
        image: "https://ik.imagekit.io/devhm/2371.jpg?updatedAt=1756234808559",
        bullets: ["Skilled worker pathways", "Job-ready CV & cover letter", "Work permits & LMIA/CoS"],
    },
    {
        heading: "Tourist / Visitor Visa",
        sub: "Hassle-free holidays: accurate documentation, strong travel plans, and flawless applications.",
        cta: { label: "Plan Your Trip", href: "/services/tourist-visa" },
        bg: "https://ik.imagekit.io/devhm/547.jpg?updatedAt=1756234808841",
        image: "https://ik.imagekit.io/devhm/547.jpg?updatedAt=1756234808841",
        bullets: ["Multiple-entry options", "Itinerary & insurance help", "Fast processing"],
    },
];

export default function HeroCarouselVisa() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5500,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    return (
        <div className="w-full my-6 mx-auto px-3 md:px-4 lg:px-6">
            <Slider {...settings}>
                {slides.map((s, i) => (
                    <div key={i}>
                        <section
                            className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]"
                            style={{
                                backgroundImage: `url(${s.bg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-black/60 md:bg-black/35" />

                            {/* Content grid */}
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-5 sm:p-7 md:p-10 lg:p-14 xl:p-16 min-h-[500px] md:min-h-[560px] ">
                                {/* Left: Text */}
                                <div className="flex items-center">
                                    <div className="text-white max-w-xl">
                                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/15 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
                                            <span className="h-2 w-2 rounded-full bg-white/80" />
                                            Visa & Immigration
                                        </span>

                                        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                            {s.heading}
                                        </h1>

                                        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90">
                                            {s.sub}
                                        </p>

                                        {/* bullets */}
                                        <ul className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90 text-sm">
                                            {s.bullets.map((b, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTAs */}
                                        <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
                                            <a
                                                href={s.cta.href}
                                                className="inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white text-gray-900 hover:bg-white/90 transition"
                                            >
                                                {s.cta.label}
                                            </a>
                                            <a
                                                href="/contact"
                                                className="inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold rounded-xl border border-white/40 text-white hover:bg-white/10 transition"
                                            >
                                                Free Consultation
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Centered image in bordered card */}
                                <div className="flex items-center justify-center">
                                    <div className="relative max-w-md w-full">
                                        <div className="rounded-3xl border border-white/60 bg-white/30 backdrop-blur p-3 sm:p-4 md:p-5">
                                            <div className="rounded-2xl border-2 border-white overflow-hidden">
                                                <img
                                                    src={s.image}
                                                    alt={`${s.heading} hero`}
                                                    className="w-full h-auto object-contain max-h-[320px] sm:max-h-[360px] md:max-h-[420px]"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        {/* decorative ring */}
                                        <div className="pointer-events-none absolute -inset-2 rounded-[2rem] border border-white/20" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
