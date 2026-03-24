"use client";

import { useState } from "react";

import { CheckCircle2, Wrench, ShieldCheck, Thermometer, CalendarDays, MapPin, BadgePoundSterling, ClipboardCheck, Mail } from "lucide-react";

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

const initialForm = {
  name: "",
  phone: "",
  email: "",
  postcode: "",
  service: "Annual service contract",
  message: "",
};

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
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
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Heat Pump Enquiry - ${formData.service}${formData.postcode ? ` - ${formData.postcode}` : ""}`;
    const bodyLines = [
      `Name: ${formData.name || "Not provided"}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Email: ${formData.email || "Not provided"}`,
      `Postcode: ${formData.postcode || "Not provided"}`,
      `Service needed: ${formData.service || "Not provided"}`,
      "",
      "Enquiry details:",
      formData.message || "Not provided",
    ];

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.15),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]">
        <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 px-6 py-4 text-center shadow-lg">
          <p className="text-base font-bold tracking-wide text-white md:text-lg">
            ANNUAL SERVICE CONTRACTS FROM JUST <span className="text-slate-950">£12.50 PER MONTH</span>
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              {/* Logo */}
              <div className="-mt-20 mb-8">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Cornwall Heat Pump Services
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  Specialist heat pump servicing & maintenance
                </div>
              </div>

              <div className="mb-8 h-[3px] w-full max-w-xl bg-gradient-to-r from-green-500 via-blue-500 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>

              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Heat pump servicing and maintenance that keeps your system running efficiently and reliably.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Professional servicing and fault-finding for air source and ground source heat pumps, helping homes and properties stay warm, efficient, and dependable all year round.
              </p>

              <p className="mt-4 text-base font-semibold text-slate-900">
                Book your service or request a callback today.
              </p>

              <p className="mt-3 text-sm font-medium text-slate-600">
                Serving homes across Cornwall
              </p>

              

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm text-slate-500">Specialist support</div>
                  <div className="mt-1 font-semibold">Heat pumps only</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm text-slate-500">Appointments</div>
                  <div className="mt-1 font-semibold">Flexible scheduling</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm text-slate-500">Approach</div>
                  <div className="mt-1 font-semibold">Clear, practical advice</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8 space-y-6">
              <img
                src="https://images.openai.com/static-rsc-3/zcujI6d2kTwXWugil43YWFV4hQbHU-NLBipNH3JN_0Wjxu4ZtYKPWaDHELSVCJbl_InthfSL-Obti1jBHyheh6JMO1kN-dDd1CzlpPLIl3A?purpose=fullsize&v=1"
                alt="Air source heat pump installed beside a modern home"
                className="w-full h-64 object-cover rounded-[28px] shadow-lg"
              />

              <Card className="rounded-[28px] border-slate-200 shadow-xl shadow-slate-200/60">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Quick enquiry</div>
                      <div className="text-xl font-semibold">Contact {company.name}</div>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                      placeholder="Full name"
                      required
                    />
                    
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                      placeholder="Email address"
                      required
                    />
                    <input
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                      placeholder="Property postcode"
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                    >
                      <option>Service needed</option>
                      <option>Annual service contract</option>
                      <option>Repair / fault finding</option>
                      <option>System health check</option>
                      <option>Heating optimisation</option>
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                      placeholder="Tell us a little about your system or the issue"
                      required
                    />
                    <Button type="submit" className="w-full rounded-2xl py-6 text-base">
                      Request my service
                    </Button>
                    <p className="mt-3 text-sm text-slate-500 text-center">
                      We’ll get back to you within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Experienced, manufacturer-trained support</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              With over a decade working specifically with heat pumps, Cornwall Heat Pump Services provides specialist knowledge built from real-world systems, not just manuals.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Trained by leading manufacturers including Mitsubishi, Vaillant, Daikin, Samsung, Danfoss, Thermia, Kensa, and Mastertherm, you can be confident your system is in capable hands.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold">All manufacturers covered</h3>
            <p className="mt-3 text-slate-600">
              Whether your system is older, newly installed, or somewhere in between, support is available across all major heat pump brands and system types.
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
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

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Services</h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything your heat pump needs to stay efficient, reliable, and ready for the seasons ahead.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-[26px] border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Service plans & monthly options</h2>
            <p className="mt-4 text-lg text-slate-600">
              Flexible service agreements designed to keep your system running smoothly all year round, with the option to spread the cost through simple monthly payments.
              <br />
              <span className="font-semibold text-slate-900">From just £12.50 per month.</span>
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-[26px] border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Basic Plan</h3>
                <p className="mt-3 text-slate-600">Annual service and system check to keep your heat pump efficient and reliable.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Annual servicing visit</li>
                  <li>• System performance check</li>
                  <li>• Priority booking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-[26px] border-slate-200 shadow-lg border-2 relative">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </div>
                <h3 className="text-xl font-semibold">Standard Plan</h3>
                <p className="mt-3 text-slate-600">Ongoing support with servicing plus help when things are not quite right.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Annual servicing visit</li>
                  <li>• Reduced call-out fees</li>
                  <li>• Priority response</li>
                  <li>• System optimisation advice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-[26px] border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Premium Plan</h3>
                <p className="mt-3 text-slate-600">Complete peace of mind with full support and faster response when you need it.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Annual servicing visit</li>
                  <li>• Priority call-outs</li>
                  <li>• Discounted repairs</li>
                  <li>• Ongoing system monitoring advice</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6 text-center shadow-sm">
            <p className="text-lg text-slate-700">
              Service plans available from <span className="font-semibold">£12.50 per month</span>, making it easy to keep your heat pump maintained without large upfront costs.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 md:px-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why regular servicing matters</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Heat pumps are wonderfully efficient when they are set up and maintained properly. A regular service helps keep performance where it should be, catches issues early, and gives you peace of mind when you need heating and hot water most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-[26px] border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <MapPin className="mb-4 h-6 w-6" />
              <h3 className="text-xl font-semibold">Local, responsive service</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A friendly, dependable Cornwall-based service for domestic properties, landlords, and holiday lets.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[26px] border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <BadgePoundSterling className="mb-4 h-6 w-6" />
              <h3 className="text-xl font-semibold">Straightforward pricing</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Transparent pricing and sensible recommendations, without turning the quote into a treasure hunt.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[26px] border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <ShieldCheck className="mb-4 h-6 w-6" />
              <h3 className="text-xl font-semibold">Trusted advice</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Honest guidance on servicing, repairs, controls, and system efficiency so you can make informed decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to book a service or ask about a repair?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Get in touch for a quick quote, a callback, or help with a heat pump that is not performing as it should.
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-emerald-300">
                Limited service slots available each week
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={company.emailHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-6 text-base text-white transition hover:bg-white/10"
              >
                Email {company.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
