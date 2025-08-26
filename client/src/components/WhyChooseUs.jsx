// WhyChooseUs.jsx
import React from "react";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

export default function WhyChooseUs({
  title = "Why Choose Settle Nation?",
  phone = "+91 89688 81110",
  readMoreHref = "/about",
  images = [
    "https://ik.imagekit.io/devhm/12334.jpg?updatedAt=1756237019832",
    "https://ik.imagekit.io/devhm/2148434385.jpg?updatedAt=1756237019906",
    "https://ik.imagekit.io/devhm/144819.jpg?updatedAt=1756237020010",
  ],
}) {
  const bullets = [
    "Transparent guidance & clear timelines",
    "Expert counselors for study • work • PR • visitor",
    "Up-to-date with the latest immigration policies",
    "End-to-end services: SOPs, documentation, filing",
    "Personalized strategy to fit your goals & budget",
    "High approval track record & faster processing",
  ];

  return (
    <section className="w-full">
      {/* Full width banner */}
      <div className="w-full bg-orange-500 text-white text-center py-3 sm:py-4">
        <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
          🎉 20+ Years of Experience in Immigration
        </span>
      </div>

      <div className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-orange-50 px-3 py-1.5 rounded-full text-orange-700 border border-orange-100">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Most trusted visa consultancy in Chandigarh
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: collage */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {/* Tall image */}
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[3/4] group transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-xl">
              <img
                src={images[0]}
                alt="Settle Nation counseling"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Top-right */}
            <div className="col-span-1 rounded-3xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[4/3] group transition-transform duration-300 hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-xl">
              <img
                src={images[1]}
                alt="Visa documentation support"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Bottom-right */}
            <div className="col-span-1 rounded-3xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[4/3] group transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-xl">
              <img
                src={images[2]}
                alt="Happy clients"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Looking for the best immigration consultants in Chandigarh?{" "}
              <span className="font-semibold text-gray-900">Settle Nation</span>{" "}
              delivers specialized immigration solutions with expert guidance
              and complete transparency. From your first consultation to
              post-approval support, we keep you informed and confident at every
              step. Whether you aim to study, work, travel, or settle abroad,
              our seasoned team streamlines documentation, strengthens your
              profile, and maximizes your chances of success.
            </p>

            {/* Bullets */}
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-orange-500" />
                  </span>
                  <span className="text-gray-800">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={readMoreHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                Read More
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100 font-semibold transition"
              >
                <Phone className="h-5 w-5" />
                {phone}
              </a>
            </div>

            {/* Trust note */}
            <div className="mt-5 text-sm text-gray-500">
              Over a decade of experience • Thousands of successful approvals •
              Client-first, policy-aligned advice
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
