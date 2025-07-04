import { useState } from "react";
import DemoDialog from "./DemoDialog";

const packages = [
  {
    label: "Starter",
    price: 199,
    features: [
      "5000 calls/day",
      "Ideal for small teams/testing",
      "Voice bot(English only)",
      "Basic Call Flow",
      "CRM export(csv)",
      "Email Support",
    ],
    popular: false,
    bg: "bg-[#1A1A1A]",
  },
  {
    label: "Premium",
    price: 1499,
    features: [
      "upto 100,000 calls/day",
      "Ideal for Scaled ops & BPO's",
      "Advance AI bot(multi-lingual)",
      "Advance Call Flow",
      "Dashboard access",
      "Real-time CRM sync",
      "Call routing",
      "Email Support",
    ],
    popular: true,
    bg: "bg-violet-900/20 backdrop-blur-lg border-2 border-violet-500",
  },
];

export default function Pricing() {
  const [openDemoForm, setOpenDemoForm] = useState(false);

  return (
    <div id="pricing" className="py-20 md:px-20 lg:px-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-purple-400" data-aos="fade-down">
            Pricing Plans
          </h2>
          <h2 className="text-white text-[30px] font-bold" data-aos="fade-down">
            Choose Your Perfect Package
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-gray-400"
            data-aos="fade-down"
          >
            Select from our carefully curated packages to meet your specific
            needs and budget.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {packages.map((pkg, i) => (
            <div
              key={pkg.label}
              className={`relative rounded-xl flex flex-col justify-between ${
                pkg.popular
                  ? "hover:-translate-y-2 transition-all duration-300"
                  : ""
              } w-full md:w-[48%] lg:w-[30%] ${pkg.bg} ${
                pkg.popular ? "rounded-2xl p-6" : "p-6"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex-grow">
                <div className={`text-center`}>
                  <h3 className="text-2xl font-bold text-white">{pkg.label}</h3>
                  <div className="mt-4">
                    <span className="text-4xl text-violet-400 font-bold">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <div className="mt-6">
                  <ul className="mb-8 space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 text-purple-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-2">
                <span
                  role="button"
                  onClick={() => setOpenDemoForm(true)}
                  className="block cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Choose Plan
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DemoDialog
        isOpen={openDemoForm}
        onClose={() => setOpenDemoForm(false)}
      />
    </div>
  );
}
