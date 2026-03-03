"use client"

import { MoveLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto px-4 py-4">

        <div className="bg-white rounded-xl shadow-sm px-6 sm:px-10 py-10 space-y-20">

          {/* Header */}
          <section className="border-b border-gray-100 pb-8">
            <div className="mb-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <MoveLeft className="size-4" />
                <span>Home</span>
              </Link>
            </div>

            <div className="flex flex-col flex-row gap-2 mb-5 sm:items-start sm:gap-6 lg:gap-8">

              {/* Headshot */}
              <div className="flex-shrink-0 mb-6 sm:mb-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src="/headshot.jpg"
                    alt="Headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Block */}
              <div className="flex-1 space-y-4">

                {/* 
                 */}


                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
                    First Last
                  </h1>

                  <div className="mt-3 text-xs sm:text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
                    PROJECT LEAD · ARCHITECTURE & SYSTEMS DESIGN
                  </div>
                </div>


              </div>

            </div>
            <p className="mt-6 text-base sm:text-lg text-gray-700 leading-8 max-w-3xl">
              I build software systems end-to-end, from data modeling and backend architecture to user interfaces and native platform integrations. I'm most engaged when solving problems that require architectural thinking, performance awareness, and long-term maintainability.
            </p>

          </section>



          {/* Architecture Section */}
            <section className="space-y-8 border-t border-gray-100 pt-10">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Technical Background
            </h2>

            <div className="space-y-5 text-base text-gray-700 leading-8 max-w-3xl">
              <p>
                My background spans Next.js, React, .NET, Python, SQL, DevOps pipelines, and cross-platform mobile development using Capacitor — including custom native plugins in Java and Swift.
              </p>

              <p>
                While I operate comfortably across the full stack, my focus is on how systems are structured, how components communicate, and where performance or reliability can be improved. I care about the seams between layers as much as the layers themselves.
              </p>

            </div>
          </section>

          {/* Technical Ownership */}
          <section className="space-y-8 border-t border-gray-100 pt-10">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Technical Ownership
            </h2>

              <div className="space-y-5 text-base text-gray-700 leading-8 max-w-3xl">
              <p>
                I tend to take ownership of problems involving:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base leading-8">
                <li>Scalable backend and service design</li>
                <li>Performance, observability, and reliability improvements</li>
                <li>Web-native integration and cross-platform architecture</li>
                <li>Infrastructure automation and deployment strategy</li>
                <li>Designing systems that remain maintainable under growth</li>
              </ul>
            </div>
          </section>

          {/* Philosophy */}
          <section className="space-y-8 border-t border-gray-100 pt-10">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Philosophy
            </h2>

            <div className="space-y-5 text-base text-gray-700 leading-8 max-w-3xl">
              <p>
                I'm increasingly interested in work that goes deeper into system design, native platforms, and infrastructure-level engineering. I enjoy operating closer to the mechanics of software — where architectural decisions directly affect performance, scalability, and reliability.
              </p>

              <p>
                I value clean boundaries, pragmatic trade-offs, and writing code that remains understandable years later. Outside of production work, I experiment with architectural patterns, runtime behavior, and tooling that improve developer efficiency and system robustness.
              </p>

  <p>
    I'm motivated by roles that involve deeper architectural ownership, systems-level thinking, and building software that operates reliably at scale — whether that’s backend-heavy platforms, native applications, or infrastructure-focused engineering.
  </p>

            </div>
          </section>


        </div>
      </div>
    </div>
  )
}