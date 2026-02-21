import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Privacy Policy</h1>

        <p className="text-zinc-700 mb-4">
          Your privacy is important to us. This page explains how we collect, use, and protect your information while using our website.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>Analytics data via Vercel Analytics (anonymous usage metrics).</li>
            <li>Session data via LogRocket to improve user experience and troubleshoot issues.</li>
            <li>Basic browser information such as device type, browser version, and operating system.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>Monitor and improve website performance using Vercel Analytics.</li>
            <li>Record sessions using LogRocket to identify bugs and enhance user experience.</li>
            <li>Analyze anonymized data to understand usage trends and preferences.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Cookies & Tracking</h2>
          <p className="text-zinc-700 mb-2">
            Our site uses cookies to store your preferences and enhance your experience. Analytics and session recordings are only collected if you accept cookies via our cookie banner.
          </p>
          <p className="text-zinc-700">
            You can manage your cookie preferences at any time by clearing your browser cookies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Third-Party Services</h2>
          <p className="text-zinc-700 mb-2">
            We use the following services to help us understand and improve our site:
          </p>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>
              <strong>Vercel Analytics:</strong> Collects anonymous usage metrics such as page views and visitor counts. No personal data is stored.
            </li>
            <li>
              <strong>LogRocket:</strong> Records sessions to help diagnose issues and improve the user experience. Session data may include user interactions, device info, and browser logs.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Your Rights</h2>
          <p className="text-zinc-700">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>Request access to the data we collect about you.</li>
            <li>Opt-out of analytics and session recordings by declining cookies.</li>
            <li>Request deletion of your data collected through LogRocket.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Contact Us</h2>
          <p className="text-zinc-700">
            If you have any questions about this privacy policy, please <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">contact us</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}