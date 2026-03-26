export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-semibold mb-6">
          Thanks — your enquiry has been sent
        </h1>

        <p className="text-lg text-slate-300 mb-8">
          We’ve received your request and will get back to you within 24 hours.
        </p>

        <a
          href="/"
          className="inline-block rounded-2xl bg-white text-slate-900 px-6 py-3 font-medium"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
}