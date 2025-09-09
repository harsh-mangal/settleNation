import React from "react";
import { FileText, Upload, Plane } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 dark:text-orange-400" />,
    title: "Complete Online Form",
    desc: "Fill out our quick and easy online form from anywhere. Your journey starts here.",
  },
  {
    icon: <Upload className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 dark:text-orange-400" />,
    title: "Submit Documents",
    desc: "Upload all necessary documents, and we'll handle the rest. Your details are safe with us.",
  },
  {
    icon: <Plane className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 dark:text-orange-400" />,
    title: "Receive Your Visa",
    desc: "Your visa is on its way! Get ready to explore new horizons.",
  },
];

export default function WorkProgress() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Our Work Progress
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get Your Visa Approved in 3 Easy Steps!
        </p>

        {/* Steps */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="
                rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700
                p-6 sm:p-7 flex flex-col items-center text-center
                transition-transform duration-300 ease-out
                hover:-translate-y-2 hover:rotate-1 hover:shadow-xl
              "
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 dark:bg-orange-900/30 mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}