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

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

function CardContent({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

function Button({
  className = "",
  children,
  type = "button",
}: {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
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
      <section
        id="top"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.05),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]"
      >
        <div className="border-b border-slate-200/80 bg-white/70 px-6 py-3 text-center backdrop-blur">
          <p className="text-sm font-medium tracking-wide text-slate-700 md:text-base">
            Service plans from{" "}
            <span className="font-semibold text-slate-950">£12.50 per month</span>
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="pt-2">
              <div className="mb-8">
                <div className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Cornwall Heat Pump Services
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                  Specialist servicing & maintenance
                </div>
              </div>

              <div className="mb-8 h-px w-full max-w-xl bg-gradient-to-r from-emerald-500/80 via-sky-500/60 to-transparent"></div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
                Specialist heat pump servicing across Cornwall.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Professional servicing, repairs, and performance checks for air
                source and ground source heat pumps, helping your system stay
                efficient, reliable, and ready for every season.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm">
                  <div className="text-sm text-slate-500">Specialist focus</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    Heat pumps only
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm">
                  <div className="text-sm text-slate-500">Appointments</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    Flexible scheduling
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm">
                  <div className="text-sm text-slate-500">Approach</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    Clear, practical advice
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:pl-6">
              <img
                src="https://images.openai.com/static-rsc-3/zcujI6d2kTwXWugil43YWFV4hQbHU-NLBipNH3JN_0Wjxu4ZtYKPWaDHELSVCJbl_InthfSL-Obti1jBHyheh6JMO1kN-dDd1CzlpPLIl3A?purpose=fullsize&v=1"
                alt="Air source heat pump installed beside a modern home"
                className="h-72 w-full rounded-[32px] object-cover shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              />

              <Card className="rounded-[32px] border border-slate-200/90 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8 flex items-start gap-4">
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">
                        Quick enquiry
                      </div>
                      <div className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
                        Request a callback or service quote
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Tell us a little about your property or system and we’ll
                        get back to you within 24 hours.
                      </p>
                    </div>
                  </div>

                  <form
                    action="https://formspree.io/f/xxxxabcd"
                    method="POST"
                    className="space-y-4"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Cornwall Heat Pump Services enquiry"
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        name="name"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400"
                        placeholder="Full name"
                        required
                      />

                      <input
                        name="phone"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400"
                        placeholder="Phone number"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400"
                      placeholder="Email address"
                      required
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        name="postcode"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400"
                        placeholder="Property postcode"
                      />

                      <select
                        name="service"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400"
                        defaultValue="Annual service contract"
                      >
                        <option value="Annual service contract">
                          Annual service contract
                        </option>
                        <option value="Repair / fault finding">
                          Repair / fault finding
                        </option>
                        <option value="System health check">
                          System health check
                        </option>
                        <option value="Heating optimisation">
                          Heating optimisation
                        </option>
                      </select>
                    </div>

                    <textarea
                      name="message"
                      rows={5}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400"
                      placeholder="Tell us about your system, service needs, or any issues you’d like checked"
                      required
                    />

                    <Button
                      type="submit"
                      className="w-full rounded-2xl py-4 text-base font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        Request my service
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>

                    <p className="text-center text-sm text-slate-500">
                      Prefer email? Contact us directly at{" "}
                      <a
                        href={company.emailHref}
                        className="font-medium text-slate-700 underline underline-offset-4"
                      >
                        {company.email}
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Experienced, manufacturer-trained support
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              With over a decade working specifically with heat pumps, Cornwall
              Heat Pump Services provides specialist knowledge built from
              real-world systems, not just manuals.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Trained by leading manufacturers including Mitsubishi, Vaillant,
              Daikin, Samsung, Danfoss, Thermia, Kensa, and Mastertherm, you can
              be confident your system is in capable hands.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-semibold text-slate-950">
              All manufacturers covered
            </h3>
            <p className="mt-3 text-slate-600">
              Whether your system is older, newly installed, or somewhere in
              between, support is available across all major heat pump brands
              and system types.
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <li>• Mitsubishi</li>
              <li>• Vaillant</li>
              <li>• Daikin</li>
              <li>• Samsung</li>
              <li>• Danfoss</li>
              <li>• Thermia</li>
              <li>• Kensa</li>
              <li>• Mastertherm</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Everything your heat pump needs to stay efficient, reliable, and
            ready for the seasons ahead.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-7">
                  <div className="mb-5 inline-flex rounded-2xl bg-slate-100 p-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-10 text-white md:px-12 md:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Timely servicing matters
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Need your heat pump checked before small issues become bigger ones?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Book a service visit or request a callback today for practical,
                specialist support across Cornwall.
              </p>
            </div>

            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Request my service
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Service plans & monthly options
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Flexible service agreements designed to keep your system running
              smoothly all year round, with the option to spread the cost
              through simple monthly payments.
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              From just £12.50 per month.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-slate-950">
                  Basic Plan
                </h3>
                <p className="mt-3 text-slate-600">
                  Annual service and system check to keep your heat pump
                  efficient and reliable.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Annual servicing visit</li>
                  <li>• System performance check</li>
                  <li>• Priority booking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative rounded-[28px] border-2 border-slate-900 bg-white shadow-lg">
              <CardContent className="p-7">
                <div className="mb-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </div>
                <h3 className="text-xl font-semibold text-slate-950">
                  Standard Plan
                </h3>
                <p className="mt-3 text-slate-600">
                  Ongoing support with servicing plus help when things are not
                  quite right.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Annual servicing visit</li>
                  <li>• Reduced call-out fees</li>
                  <li>• Priority response</li>
                  <li>• System optimisation advice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-slate-950">
                  Premium Plan
                </h3>
                <p className="mt-3 text-slate-600">
                  Complete peace of mind with full support and faster response
                  when you need it.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Annual servicing visit</li>
                  <li>• Priority call-outs</li>
                  <li>• Discounted repairs</li>
                  <li>• Ongoing system monitoring advice</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-lg leading-8 text-slate-700">
              Service plans available from{" "}
              <span className="font-semibold text-slate-950">£12.50 per month</span>,
              making it easier to keep your heat pump maintained without large
              upfront costs.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:px-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Why regular servicing matters
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Heat pumps are wonderfully efficient when they are set up and
              maintained properly. A regular service helps keep performance
              where it should be, catches issues early, and gives you peace of
              mind when you need heating and hot water most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-7">
              <MapPin className="mb-4 h-6 w-6" />
              <h3 className="text-xl font-semibold text-slate-950">
                Local, responsive service
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                A friendly, dependable Cornwall-based service for domestic
                properties, landlords, and holiday lets.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-7">
              <BadgePoundSterling className="mb-4 h-6 w-6" />
              <h3 className="text-xl font-semibold text-slate-950">
                Straightforward pricing
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Transparent pricing and sensible recommendations, without
                turning the quote into a treasure hunt.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-7">
              <ShieldCheck className="mb-4 h-6 w-6" />
              <h3 className="text-xl font-semibold text-slate-950">
                Trusted advice
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Honest guidance on servicing, repairs, controls, and system
                efficiency so you can make informed decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to book a service or ask about a repair?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Get in touch for a quick quote, a callback, or help with a heat
                pump that is not performing as it should.
              </p>
              <p className="mt-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                Limited service slots available each week
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={company.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-base text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email {company.email}
              </a>

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                <Phone className="h-4 w-4" />
                Request service
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}