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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.15),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]">

        <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 px-6 py-4 text-center shadow-lg">
          <p className="text-base font-bold text-white md:text-lg">
            ANNUAL SERVICE CONTRACTS FROM JUST <span className="text-slate-950">£12.50 PER MONTH</span>
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold">
                Cornwall Heat Pump Services
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Professional servicing and fault-finding for air source and ground source heat pumps.
              </p>

              <p className="mt-4 font-semibold">
                Book your service or request a callback today.
              </p>
            </div>

            {/* FORM */}
            <div>
              <Card className="rounded-[28px] border shadow-xl">
                <CardContent className="p-8">

                  <div className="mb-6 flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">
                      Contact {company.name}
                    </h2>
                  </div>

                  <form
                    action="https://formsubmit.co/service@roselandenergy.co.uk"
                    method="POST"
                    className="space-y-4"
                  >
                    <input type="hidden" name="_subject" value="New heat pump enquiry" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://cornwallheatpumps.co.uk/thank-you"
                    />

                    <input name="name" placeholder="Full name" required className="w-full p-3 border rounded-2xl" />
                    <input type="email" name="email" placeholder="Email address" required className="w-full p-3 border rounded-2xl" />
                    <input name="postcode" placeholder="Postcode" className="w-full p-3 border rounded-2xl" />

                    <select name="service" className="w-full p-3 border rounded-2xl">
                      <option>Annual service contract</option>
                      <option>Repair / fault finding</option>
                      <option>System health check</option>
                    </select>

                    <textarea name="message" required rows={4} placeholder="Tell us about your system" className="w-full p-3 border rounded-2xl" />

                    <Button type="submit" className="w-full rounded-2xl py-4">
                      Request my service
                    </Button>
                  </form>

                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}