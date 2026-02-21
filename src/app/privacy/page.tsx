import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Privacy Policy</h1>

        <p className="text-zinc-700 mb-4">
          Your privacy is important. This page explains how we collect and use information while using this website.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>Anonymous analytics data via Vercel Analytics (page views, performance metrics).</li>
            <li>Session recordings via LogRocket (fully anonymized, no personal identifiers).</li>
            <li>Basic browser information (device type, browser version, operating system).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">How We Use Information</h2>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>Monitor and improve website performance.</li>
            <li>Identify issues and enhance user experience using anonymized session recordings.</li>
            <li>Analyze aggregated data to understand usage trends.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Cookies & Tracking</h2>
          <p className="text-zinc-700 mb-2">
            This site uses cookies and session recordings for performance and analytics. All sessions are fully anonymized, and no personal data is collected.
          </p>
          <p className="text-zinc-700">
            You can manage cookies by clearing your browser cookies. This site does not require consent for non-personal, anonymized analytics.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Third-Party Services</h2>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>
              <strong>Vercel Analytics:</strong> Collects anonymous usage metrics like page views and visitor counts. No personal data is stored.
            </li>
            <li>
              <strong>LogRocket:</strong> Records fully anonymized sessions to help improve the user experience. No IP addresses or personal identifiers are collected.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-800 mb-2">Contact</h2>
          <p className="text-zinc-700">
            For questions about this privacy policy, please <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">contact us</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}