"use client";

import {
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Thermometer,
  MapPin,
  BadgePoundSterling,
  ClipboardCheck,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Annual Service Contracts",
    text: "Keep your air source or ground source heat pump running efficiently with a thorough yearly service and performance check.",
    icon: Wrench,
  },
  {
    title: "Repairs & Fault Finding",
    text: "Fast diagnosis and practical repair support for common faults, performance drops, pressure issues, and system errors.",
    icon: ShieldCheck,
  },
  {
    title: "System Health Checks",
    text: "Ideal for homeowners, landlords, and buyers who want a professional overview of system condition, settings, and efficiency.",
    icon: ClipboardCheck,
  },
  {
    title: "Hot Water & Heating Optimisation",
    text: "Fine-tuning controls, temperatures, weather compensation, and system settings to improve comfort and reduce running costs.",
    icon: Thermometer,
  },
];

const benefits = [
  "Over 10 years of hands-on heat pump experience",
  "Improve efficiency and lower running costs",
  "Spot issues before they become expensive repairs",
  "Extend the life of your heat pump system",
  "Maintain comfort, reliability, and hot water performance",
  "Clear, honest advice with no jargon overload",
  "Service support for homeowners, landlords, and holiday lets",
];

const trustPoints = [
  "10+ years specialist heat pump experience",
  "Manufacturer-trained support",
  "Cornwall-based service",
];

const company = {
  name: "Cornwall Heat Pump Services",
  email: "service@roselandenergy.co.uk",
  emailHref: "mailto:service@roselandenergy.co.uk",
};

function Card({ className = "", children }: any) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }: any) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", children, type = "button" }: any) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800 ${className}`}
    >
      {children}
    </button>
  );
}

export default function HeatPumpServiceWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="border-b border-slate-200 bg-white/70 px-6 py-3 text-center backdrop-blur">
          <p className="text-sm font-medium text-slate-700">
            Service plans from <span className="font-semibold">£12.50 per month</span>
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                Specialist heat pump servicing across Cornwall.
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Professional servicing, repairs, and performance checks for air source and ground source heat pumps.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {trustPoints.map((point) => (
                  <span key={point} className="rounded-full border px-4 py-2 text-sm">
                    {point}
                  </span>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border p-8 shadow-xl">
              <h2 className="text-xl font-semibold mb-4">
                Request a callback or service quote
              </h2>

              <form
                action="https://formsubmit.co/service@roselandenergy.co.uk"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New enquiry - Cornwall Heat Pump Services" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" placeholder="Full name" required className="input" />
                  <input name="phone" placeholder="Phone number" className="input" />
                </div>

                <input type="email" name="email" placeholder="Email address" required className="input" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="postcode" placeholder="Postcode" className="input" />

                  <select name="service" className="input">
                    <option>Annual service</option>
                    <option>Repair</option>
                    <option>Health check</option>
                    <option>Optimisation</option>
                  </select>
                </div>

                <textarea name="message" placeholder="Tell us about your system" required className="input" />

                <button className="w-full rounded-2xl bg-slate-900 py-4 text-white">
                  Request my service
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Services</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="border rounded-2xl p-6">
                <Icon className="mb-3" />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{s.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b} className="flex gap-3">
              <CheckCircle2 />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to book a service?
        </h2>
        <p className="mt-4 text-slate-300">
          Get in touch today for a quick quote or callback.
        </p>

        <a href="mailto:service@roselandenergy.co.uk" className="inline-block mt-6 underline">
          Email us directly
        </a>
      </section>
    </div>
  );
}