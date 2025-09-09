import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from "lucide-react";

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
        customPaging: () => (
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/50 dark:bg-gray-400 rounded-full transition-all hover:bg-white dark:hover:bg-gray-200" />
        ),
    };

    return (
        <div className="w-full pt-4 mx-auto px-3 md:px-4 lg:px-6 bg-gray-50 dark:bg-gray-900 ">

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
                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-black/60 md:bg-black/35 dark:bg-black/70 dark:md:bg-black/50" />

                            {/* Content grid */}
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-5 sm:p-7 md:p-10 lg:p-14 xl:p-16 min-h-[500px] md:min-h-[560px]">
                                {/* Left: Text */}
                                <div className="flex items-center">
                                    <div className="text-white dark:text-gray-100 max-w-xl">
                                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/15 dark:bg-gray-800/20 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 dark:border-gray-600/30">
                                            <span className="h-2 w-2 rounded-full bg-white/80 dark:bg-gray-300" />
                                            Visa & Immigration
                                        </span>

                                        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                            {s.heading}
                                        </h1>

                                        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90 dark:text-gray-200/90">
                                            {s.sub}
                                        </p>

                                        {/* Bullets */}
                                        <ul className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90 dark:text-gray-200/90 text-sm">
                                            {s.bullets.map((b, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/80 dark:bg-gray-300" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTAs */}
                                        <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
                                            <a
                                                href={s.cta.href}
                                                className="inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-white/90 dark:hover:bg-gray-700 transition"
                                            >
                                                {s.cta.label}
                                            </a>
                                            <a
                                                href="/contact"
                                                className="inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold rounded-xl border border-white/40 dark:border-gray-600/40 text-white dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-700/20 transition"
                                            >
                                                Free Consultation
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Centered image in bordered card */}
                                <div className="flex items-center justify-center">
                                    <div className="relative max-w-md w-full">
                                        <div className="rounded-3xl border border-white/60 dark:border-gray-600/60 bg-white/30 dark:bg-gray-800/30 backdrop-blur p-3 sm:p-4 md:p-5">
                                            <div className="rounded-2xl border-2 border-white dark:border-gray-600 overflow-hidden">
                                                <img
                                                    src={s.image}
                                                    alt={`${s.heading} hero`}
                                                    className="w-full h-auto object-contain max-h-[320px] sm:max-h-[360px] md:max-h-[420px]"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        {/* Decorative ring */}
                                        <div className="pointer-events-none absolute -inset-2 rounded-[2rem] border border-white/20 dark:border-gray-600/20" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </Slider>

            {/* Custom styles for slick dots */}
            <style jsx>{`
                .slick-dots li button:before {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.5);
                    opacity: 0.5;
                }
                .slick-dots li.slick-active button:before {
                    color: #ffffff;
                    opacity: 1;
                }
                .dark .slick-dots li button:before {
                    color: rgba(209, 213, 219, 0.5); /* gray-300 */
                    opacity: 0.5;
                }
                .dark .slick-dots li.slick-active button:before {
                    color: #e5e7eb; /* gray-200 */
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}