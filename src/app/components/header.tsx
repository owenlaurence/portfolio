"use server"

import Link from "next/link";
import { Github } from "lucide-react";

export default async function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Site Name */}
        <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition">
          First Last
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          
          <Link 
            href="/about" 
            className="hover:text-blue-600 transition"
          >
            About Me
          </Link>

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Github className="size-4" />
            GitHub
          </a>

        </nav>
      </div>
    </header>
  );
}